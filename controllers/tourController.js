const fs = require('fs');

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`, {
    encoding: 'utf-8',
  })
);

// Tour Route Functions
exports.getToursAll = (req, res) => {
  res.status(200).json({
    status: 'Success',
    data: {
      tours,
    },
  });
};
exports.addTour = (req, res) => {
  const data = req.body;
  console.log(data);
  const newId = tours[tours.length - 1].id + 1;
  const completeObj = Object.assign({ id: newId }, data);

  tours.push(completeObj);

  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    'utf-8',
    (err) => {
      res.status(201).json({
        status: 'success',
        data: {
          tour: completeObj,
        },
      });
    }
  );
};

exports.getTourItem = (req, res) => {
  console.log(req.time);
  const id = +req.params.id;
  const data = tours.find((val) => val.id === id);

  if (data) {
    res.status(200).json({
      status: 'success',
      timeReq: req.time,
      timeRes: res.time,
      data: {
        data,
      },
    });
  } else {
    res.status(404).json({
      status: 'Failed',
      message: 'Invalid id',
    });
  }
};

exports.updateTour = (req, res) => {
  const id = +req.params.id;
  res.status(201).json({
    status: 'Success',
    message: 'Successfully update Information',
  });
};

exports.deleteTour = (req, res) => {
  const id = +req.params.id;
  const arr = tours.filter((val) => val.id != id);

  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(arr),
    'utf-8',
    (err) => {
      res.status(204).json({
        status: 'success',
        data: 'Malumot uchirildi',
      });
    }
  );
};
