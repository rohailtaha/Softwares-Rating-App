function SoftwareDetails({ name, developer }) {

  return (
    <div className='software__details'>
      <p className='software__name'>{name}</p>
      <p className='software__developer'>{developer}</p>
    </div>
  );
}

export default SoftwareDetails;
