import timer from "./modules/timer";
import menu from "./modules/menu";
import modal from "./modules/modal";
// import formsValidation from "./modules/formsValidation";
import tabs from "./modules/tabs";
import slider from "./modules/slider";
import sliderSwiper from "./modules/sliderSwiper";
import calc from "./modules/calc";
import sendForm from "./modules/sendForm";

timer("30 november 2021");
menu();
modal();
// formsValidation();
tabs();
slider();
sliderSwiper();
calc(100);
sendForm({
  formId: "form1",
  someElem: [
    {
      type: "block",
      id: "total",
    },
  ],
});
sendForm({
  formId: "form2",
  someElem: [
    {
      type: "block",
      id: "total",
    },
  ],
});
sendForm({
  formId: "form3",
  someElem: [
    {
      type: "block",
      id: "total",
    },
  ],
});
