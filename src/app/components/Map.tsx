const Map: React.FC = () => {
    return (
      <div className="relative w-full h-64">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.123456789!2d-17.123456!3d-34.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1f1234567890abcdef%3A0x1234567890abcdef!2sNourish%20and%20Flourish!5e0!3m2!1sen!2sza!4v1612345678901!5m2!1sen!2sza"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    );
  };
  
  export default Map;