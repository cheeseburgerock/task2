const Tour = require('./tour.model');

const Tours = [new Tour()];

const getAll = async () => Tours;

const getById = async (id) => Tours.find((tour) => tour.id === id);

const createTour = async ({
  id,
  title,
  slug,
  description,
  isActive,
  createdAt,
  updatedAt,
}) => {
  const tour = new Tour({
    id,
    title,
    slug,
    description,
    isActive,
    createdAt,
    updatedAt,
  });
  Tours.push(tour);
  return tour;
};

const getToursById = async (id) => {
  const tours = [];
  Tours.forEach((tour) => {
    if (tour.tourId === id) tours.push(tour);
  });
  return tours;
};

const deleteById = async (id) => {
  const tourPosition = Tours.findIndex((tour) => tour.id === id);

  if (tourPosition === -1) return null;

  const tourDeletable = Tours[tourPosition];

  Tours.splice(tourPosition, 1);
  return tourDeletable;
};

const updateById = async ({
  id,
  title,
  slug,
  description,
  isActive,
  createdAt,
  updatedAt,
}) => {
  const tourPosition = Tours.findIndex((tour) => tour.id === id);

  if (tourPosition === -1) return null;

  const oldTour = Tours[tourPosition];
  const newTour = {
    ...oldTour,
    title,
    slug,
    description,
    isActive,
    createdAt,
    updatedAt,
  };

  Tours.splice(tourPosition, 1, newTour);
  return newTour;
};

module.exports = {
  Tours,
  getAll,
  getToursById,
  getById,
  createTour,
  deleteById,
  updateById,
};
