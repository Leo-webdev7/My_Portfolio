import profileImage from '../../assets/profile/profileImage.jpg'

function About() {
  return (
    <section className="my-5">
      <div className="my-2">
        <div className="profile-img my-5">
         {/* <i className="fas fa-user-circle" style={{ fontSize: "96px" }}></i>  */}
         {/* Replace the icon with an image */}
          <img 
            src={profileImage}
            alt="Profile" 
            style={{ width: "100px", borderRadius: "50%", height: "130px" }} 
            />
        </div>
        <p class = "about">
        I’m a full-stack software developer with a passion for building dynamic, efficient, and scalable applications. With experience across both front-end and back-end technologies, I enjoy tackling complex problems and creating solutions that offer seamless user experiences. I’m always excited to learn new tools, frameworks, and best practices to stay at the cutting edge of web development.
        </p>
        <p class = "about">
        I have a master's degree in economics, which gives me a unique perspective on problem-solving, data analysis, and system optimization. With a blend of technical and analytical skills, I enjoy designing solutions that are not only functional but also efficient and impactful in a real-world context.
        </p>
      </div>
    </section>
  );
}

export default About;
