import React from "react";
import StarRating from "react-star-ratings";
// [1, 4, 6, 7]
// 1 + 4 = 5
// 5 + 6 = 11
// 11 + 7 = 18
export const showAverage = (p) => {
  if (p && p.ratings) {
    let ratingsArray = p && p.ratings;
    let total = [];
    let length = ratingsArray.length;
    console.log("length", length);

    ratingsArray.map((r) => total.push(r.star));
    let totalReduced = total.reduce((p, n) => p + n, 0);
    console.log("totalReduced", totalReduced);

    let highest = length * 5;
    console.log("highest", highest);

    let result = (totalReduced * 5) / highest;
    console.log("result", result);

    return (
      <div className="text-center d-flex flex-row pt-1 pb-3">
        <span className="p-0 m-0">
          <StarRating
            rating={result}
            starDimension="16px"
            starSpacing="0px"
            starRatedColor="#e52538"
            editing={false}
          />
          ({p.ratings.length})
        </span>
      </div>
    );
  }
};
