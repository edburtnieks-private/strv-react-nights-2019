const KEY = 'customer';

export const getCustomer = () => {
  const customer = window.localStorage.getItem(KEY);

  if (customer) {
    try {
      return JSON.parse(customer);
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  return null;
};

export const setCustomer = (customer) => {
  window.localStorage.setItem(KEY, JSON.stringify(customer));
};

export const removeCustomer = () => {
  window.localStorage.removeItem(KEY);
};
