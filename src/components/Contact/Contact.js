import { useState } from 'react';

const Contact = () => {
  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    comments: '',
  });

  const onChange = (e) => {
    setContactInfo({ ...contactInfo, [e.target.id]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('Submit', e);
  };

  return (
    <div className='container'>
      <h5>Contact Form</h5>
      <form>
        <div className='form-group'>
          <label>Name</label>
          <input
            id='name'
            type='text'
            className='form-control'
            placeholder='name'
            value={contactInfo.name}
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <label>Email</label>
          <input
            id='email'
            type='text'
            className='form-control'
            placeholder='email'
            value={contactInfo.email}
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <label>Comments</label>
          <input
            id='comments'
            type='text'
            className='form-control'
            placeholder='comments'
            value={contactInfo.comments}
            onChange={onChange}
          />
        </div>

        <button
          className='btn btn-primary mt-2'
          disabled={!contactInfo.name || !contactInfo.email}
          onClick={onSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
