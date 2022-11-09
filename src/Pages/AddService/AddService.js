import { Button, Label, Textarea, TextInput } from 'flowbite-react';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvide';

const AddService = () => {
	const { user } = useContext(AuthContext)
	const [service, setService] = useState({})
	
	// set input value by onchange 
	const handleChangeOfInputValue = (event) => {
		const field = event.target.name;
		const value = event.target.value;
		const newService = { ...service }
		newService[field] = value
		setService(newService)
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		const agree = window.confirm('You are sure that you will provide this service!! ')
		if (agree) {
			const email = user?.email
			const addNewValue = { ...service, email: email }
			setService(addNewValue)
		}
		
	}
	console.log(service);

	return (
    <div className="container mx-auto p-4">
      <h1>Add service page</h1>
      <form
        onSubmit={handleSubmit}
        className="grid md:grid-cols-2 gap-4 max-w-2xl p-4 border rounded-lg mx-auto"
      >
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name" value="Name" />
          </div>
          <TextInput
            onChange={handleChangeOfInputValue}
            id="name"
            type="text"
            name="name"
            placeholder="Your Name"
            required={true}
            shadow={true}
          />
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="email" value="Your Email" />
          </div>
          <TextInput
            id="email"
            type="email"
            name="email"
            defaultValue={user.email}
            readOnly
            shadow={true}
          />
        </div>
        <div className="md:col-span-2">
          <div className="mb-2 block ">
            <Label htmlFor="title" value="Service Title" />
          </div>
          <TextInput
            id="title"
            type="text"
            name="title"
            onChange={handleChangeOfInputValue}
            placeholder="Enter your service title"
            required={true}
            shadow={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="price" value="Service Price" />
          </div>
          <TextInput
            id="price"
            type="number"
            name="price"
            onChange={handleChangeOfInputValue}
            placeholder="$150"
            required={true}
            shadow={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="photoURL" value="Service Photo URL" />
          </div>
          <TextInput
            id="photoURL"
            type="text"
            name="picture"
            onChange={handleChangeOfInputValue}
            placeholder="Enter your photo url"
            required={true}
            shadow={true}
          />
        </div>
        <div className="md:col-span-2">
          <div className="mb-2 block">
            <Label htmlFor="serviceDetails" value="Service Details" />
          </div>
          <Textarea
            id="serviceDetails"
            name="about"
            onChange={handleChangeOfInputValue}
            placeholder="Write about your service..."
            required={true}
            rows={4}
          />
        </div>

        <Button type="submit">Register new account</Button>
      </form>
    </div>
  );
};

export default AddService;