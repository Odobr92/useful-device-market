import React, { useMemo, useState } from 'react';
import { Button } from 'react-bootstrap';
import { addRating } from '../../../http/ratingAPI';
import '../../../styles/Rating.css';
import '../../../styles/Stars.css';

const RatingStar = ({ id }) => {
  const [rating, setRating] = useState(4);
  const [star1, setStar1] = useState(false);
  const [star2, setStar2] = useState(false);
  const [star3, setStar3] = useState(false);
  const [star4, setStar4] = useState(false);
  const [star5, setStar5] = useState(false);

  const resetStar = () => {
    setStar1(false);
    setStar2(false);
    setStar3(false);
    setStar4(false);
    setStar5(false);
  };

  useMemo(() => {
    resetStar();
    switch (rating) {
      case 1:
        setStar1(true);
        break;
      case 2:
        setStar2(true);
        break;
      case 3:
        setStar3(true);
        break;
      case 4:
        setStar4(true);
        break;
      case 5:
        setStar5(true);
        break;
    }
  }, [rating]);

  const creatRating = async () => {
    console.log(id, rating);
    await addRating(id, rating)
    .then(() => alert('Спасибо за оценку!'))
    .catch(() => alert('Произошла ошибка!'))
  }

  return (
    <div class="review_stars_wrap d-flex flex-column justify-content-center align-items-center">
      <h4>Оцените товар:</h4>
      <h5 className="mt-2">{rating}</h5>
      <div id="review_stars">
        <input
          id="star-4"
          type="radio"
          name="stars"
          checked={star5}
          onClick={() => {
            setRating(5);
          }}
        />
        <label title="Отлично" for="star-4">
          <i class="fas fa-star" disabled></i>
        </label>
        <input
          id="star-3"
          type="radio"
          name="stars"
          checked={star4}
          onClick={() => {
            setRating(4);
          }}
        />
        <label title="Хорошо" for="star-3">
          <i class="fas fa-star"></i>
        </label>
        <input
          id="star-2"
          type="radio"
          name="stars"
          checked={star3}
          onClick={() => {
            setRating(3);
          }}
        />
        <label title="Нормально" for="star-2">
          <i class="fas fa-star"></i>
        </label>
        <input
          id="star-1"
          type="radio"
          name="stars"
          checked={star2}
          onClick={() => {
            setRating(2);
          }}
        />
        <label title="Плохо" for="star-1">
          <i class="fas fa-star"></i>
        </label>
        <input
          id="star-0"
          type="radio"
          name="stars"
          checked={star1}
          onClick={() => {
            setRating(1);
          }}
        />
        <label title="Ужасно" for="star-0">
          <i class="fas fa-star"></i>
        </label>
      </div>
      <Button className="mt-4" onClick={creatRating}>Отправить</Button>
    </div>
  );
};

export default RatingStar;
