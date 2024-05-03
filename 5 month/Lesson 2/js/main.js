const SickForm = document.querySelector("#SickForm");

SickForm.addEventListener("submit", (e) => {
  e.preventDefault();
  //! get event targer value
  const [fullname, sickness, address, phoneNumber, male, female, level] =
    e.target;

  const newSickobj = {
    fullname: fullname.value,
    address: address.value,
    sickness: sickness.value,
    gender: male.checked ? "male" : "female",
    level: level.value,
    phoneNumber: phoneNumber.value,
  };
  const newSick = new sick(newSickobj);
  newSick.save();
  sick.Render();
  sick.editById();
  SickForm.reset();
  // location.reload();
});
