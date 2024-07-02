import Slider from "../schema/sliderSchema";

const findSlider = (data) => {
  return new Promise((resolve, reject) => {
    Slider.findOne(data).then(existingSlider => {
      resolve(existingSlider);
    }).catch(error => {
      console.error("Error finding existing Slider:", error);
      reject(error);
    });
  });
}

const findAllSlider = (data) => {
  return new Promise((resolve, reject) => {
    Slider.find(data).then(existingSlider => {
      resolve(existingSlider);
    }).catch(error => {
      console.error("Error finding existing Slider:", error);
      reject(error);
    });
  });
}

const findSliderWithData = async (data) => {
  try {
    const [records] = await Promise.all([
      Slider.aggregate([
        { $match: data },
        {
          $lookup: {
            from: 'details',
            localField: 'details_id',
            foreignField: '_id',
            as: 'details'
          }
        },
        { $unwind: { path: '$details', preserveNullAndEmptyArrays: true } },
        {
          $addFields: {
            details: { $ifNull: ['$details', null] }
          }
        },
      ]).exec(),
      Slider.countDocuments(data).exec() // Total count query
    ]);

    return records[0];
  } catch (error) {
    console.error("Error finding existing helps:", error);
    throw error;
  }
};


const findAllSliderWithData = async (data, page = 1, pageSize = 5, filter = null) => {
  try {
    const skipAmount = (page - 1) * pageSize;

    if (filter && filter.title !== '') {
      data.title = { $regex: filter.title, $options: 'i' }
    }
    if (filter && filter.status !== '') {
      data.status = filter.status === 'true' ? true : false
    }

    const [records, totalCount] = await Promise.all([
      Slider.aggregate([
        { $match: data },
        {
          $lookup: {
            from: 'details',
            localField: 'details_id',
            foreignField: '_id',
            as: 'details'
          }
        },
        { $unwind: { path: '$details', preserveNullAndEmptyArrays: true } },
        {
          $addFields: {
            details: { $ifNull: ['$details', null] }
          }
        },
        { $sort: { _id: -1 } },
        { $skip: skipAmount },
        { $limit: pageSize }
      ]).exec(),
      Slider.countDocuments(data).exec() // Total count query
    ]);

    return { records, totalCount };
  } catch (error) {
    console.error("Error finding existing helps:", error);
    throw error;
  }
};

const deleteAndAddSlider = (data) => {
  return new Promise((resolve, reject) => {
    Slider.deleteMany({}).then(() => {
      addSlider(data).then(createdSlider => {
        resolve(createdSlider);
      }).catch(error => {
        console.error("Error adding Slider:", error);
        reject(error);
      });
    }).catch(error => {
      console.error("Error deleting Sliders:", error);
      reject(error);
    });
  });
}

const addSlider = (data) => {
  return new Promise((resolve, reject) => {
    Slider.create(data).then(createdSlider => {
      resolve(createdSlider);
    }).catch(error => {
      console.error("Error inserting Slider:", error);
      reject(error);
    });
  });
}

const updateSlider = (where, updateData) => {
  return new Promise((resolve, reject) => {
    Slider.findOneAndUpdate(where, updateData, { new: true })
      .then(updatedSlider => {
        if (!updatedSlider) {
          return reject("Slider not found");
        }
        resolve(updatedSlider);
      })
      .catch(error => {
        console.error("Error updating Slider:", error);
        reject(error);
      });
  });
}

export {
  findSlider,
  findAllSlider,
  findSliderWithData,
  findAllSliderWithData,
  deleteAndAddSlider,
  addSlider,
  updateSlider
}