import { Button, Label, Textarea, TextInput } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const UpdateReview = () => {
	const [storedReview, setStoredReview] = useState({})
  const [review, setReview] = useState({})
  const navigate=useNavigate()

	// get id by pathname 
	const { id } = useParams()

	useEffect(() => {
		fetch(`http://localhost:5000/updateReview/${id}`)
      .then((res) => res.json())
      .then((data) => {
		  setStoredReview(data);
      });
	}, [id])

	// handle on change in input value 
	const handleChangeInput = (event) => {
		const field = event.target.name;
		const value = event.target.value;
		const newReview = { ...storedReview };
		newReview[field] = value;
		setReview(newReview);
	};
	
	// handle update your review 
	const handleUpdate = (event) => {
    event.preventDefault()
    
    // check you are change
    if (review["displayName"] !== undefined || review["reviewValue"] !== undefined) {
      
      // update parmision 
      const agree = window.confirm("hello");
      if (agree) {
          const newDate = new Date();
          review["date"] = newDate;
          fetch(`http://localhost:5000/updateReview/${id}`, {
            method: "PUT",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(review),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.acknowledged) {
                toast.success("Change Successfully");
                navigate("/myReviews");
              }
              
            });
        } 
    }
    else {
      toast.error("Please change value then submit!")
    }
	}

	

	return (
    <div>
      <form
        onSubmit={handleUpdate}
        className="flex flex-col gap-4 max-w-lg mx-auto"
      >
        <div>
          <div className="mb-2 block">
            <Label htmlFor="displayName" value="Your Name" />
          </div>
          <TextInput
            onChange={handleChangeInput}
            id="displayName"
            name="displayName"
            type="text"
            defaultValue={storedReview.displayName}
            required={true}
            shadow={true}
          />
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="email" value="Your Email" />
          </div>
          <TextInput
            defaultValue={storedReview.email}
            readOnly
            id="email"
            type="email"
            required={true}
            shadow={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="reviewValue" value="Your Review" />
          </div>
          <Textarea
            onChange={handleChangeInput}
            id="reviewValue"
            name="reviewValue"
            defaultValue={storedReview.reviewValue}
            required={true}
            rows={4}
          />
        </div>

        <Button type="submit">Change Review</Button>
      </form>
    </div>
  );
};

export default UpdateReview;