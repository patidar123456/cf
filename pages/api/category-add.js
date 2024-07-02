import { addBusiness, findBusiness, updateBusiness } from "../../src/model/businessModel";
import { addDetails } from "../../src/model/detailsModel";
import { addFilmIndustry, findFilmIndustry, updateFilmIndustry } from "../../src/model/filmIndustryModel";
import { addSports, findSports, updateSports } from "../../src/model/sportsModel";
import { base64ToFile } from "../../src/utils";

export const config = {
    api: {
        bodyParser: {
            sizeLimit: '50mb',
        },
    },
};

export default async function handler(req, res) {
    try {
        const setIMG = (img) => {
            if (img === 'remove') {
                return null
            } else if (img !== null && img !== 'remove') {
                return base64ToFile(img)
            }
        }
        const info = {
            ...req.body.data,
            image: setIMG(req.body.data.image)
        };
        const detailsData = {
            ...req.body.formData,
            father: setIMG(req.body.formData.father),
            mother: setIMG(req.body.formData.mother),
            siblings: setIMG(req.body.formData.siblings),
            spouse: setIMG(req.body.formData.spouse),
            children: setIMG(req.body.formData.children),
        };

        if (req.body.type === 'Business') {
            const business = await findBusiness({ user_name: info.user_name });
            if(business) {
                return res.status(400).json({ status: false, response_code: 400, message: `User name already exists in Business`, data: [] });
            }
            const data = await addBusiness(info);
            const details = await addDetails(detailsData);
            await updateBusiness(data, { details_id: details._id });
            return res.status(200).json({ status: true, response_code: 200, message: `Created Successfully`, data: [] });
        }
        if (req.body.type === 'Film_Industry') {
            const film_ind = await findFilmIndustry({ user_name: info.user_name });
            if(film_ind) {
                return res.status(400).json({ status: false, response_code: 400, message: `User name already exists in Film Industry`, data: [] });
            }
            const data = await addFilmIndustry(info);
            const details = await addDetails(detailsData);
            await updateFilmIndustry(data, { details_id: details._id });
            return res.status(200).json({ status: true, response_code: 200, message: `Created Successfully`, data: [] });
        }
        if (req.body.type === 'Sports') {
            const sport = await findSports({ user_name: info.user_name });
            if(sport) {
                return res.status(400).json({ status: false, response_code: 400, message: `User name already exists in Sports`, data: [] });
            }
            const data = await addSports(info);
            const details = await addDetails(detailsData);
            await updateSports(data, { details_id: details._id });
            return res.status(200).json({ status: true, response_code: 200, message: `Created Successfully`, data: [] });
        }

    } catch (error) {
        console.error('Error:', error.message);
        return res.status(400).json({ status: false, response_code: 400, message: error.message, data: [] });
    }
}