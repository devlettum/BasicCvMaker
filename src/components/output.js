function Output(props) {
 
    return (
      <div style={{ marginTop:100,marginLeft:100}}>
          <h2 style={{ color: 'gray',textAlign: 'center' }}>CV'niz hazırlandı...</h2>
        <div>Name : {props.InputInfos.name}</div>
        <div>Surname : {props.InputInfos.surname}</div>
        <div>Birthday : {props.InputInfos.birthday}</div>
        <div>Self-Explanation : {props.InputInfos.describe}</div>
        <div>Phone Number : {props.InputInfos.phone}</div>
        <div>Email : {props.InputInfos.email}</div>
        <div>Job : {props.InputInfos.job}</div>
        <div>Graduated : {props.InputInfos.graduated}</div>
        <div>Experience : {props.InputInfos.graduated}</div>
        <div>Linkedin : {props.InputInfos.graduated}</div>
      </div>
    );

}

export default Output;