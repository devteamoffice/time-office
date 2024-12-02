import React from "react";
import { formatDate } from "../../utils/date";
import Button from "../Common/Button";
import { XIcon } from "../Common/Icon";
import SingleProduct from "../Product/SingleProduct";
const WishList = (props) => {
  const { wishlist, updateWishlist } = props;

  return (
    <div className="row">
      {wishlist.map((item, index) => (
        <div key={index} className="col-md-6 col-xl-3">
          <div className="card">
            {/* Render the SingleProduct component and pass the product as a prop */}
            <SingleProduct products={[item.product]} />

            <div className="remove-wishlist-box">
              <Button
                variant="danger"
                icon={<XIcon className="text-white" width={15} />}
                round={20}
                onClick={(e) => {
                  updateWishlist(!item.isLiked, item.product._id);
                }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WishList;
