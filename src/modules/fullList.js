const fullList = () => {
    let jobData;
    fetch('../crm-backend/db.json')
        .then(response => response.json())
        .then(data => jobData = data)
}
export default fullList;