class FormHelper {
  static onchangePeriod = (e, stateName, periodState, setstate, months, quarters) => {
    
    const { value, name } = e.target;
    if (name==="period_type") {
      return setstate(value, stateName, periodState, months, quarters);
    }
  };
}

export default FormHelper;
