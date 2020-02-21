const validation = {
  username: {
    presence: {
      allowEmpty: false,
      message: '^Please enter an username'
    },
    length: {
      minimum: 4,
      message: '^Your username must be at least 4 characters'
    }
  },

  email: {
    presence: {
      allowEmpty: false,
      message: '^Please enter an email address'
    },
    email: {
      message: '^Invalid email'
    }
  },

  country: {
    presence: {
      allowEmpty: false,
      message: '^Please choose your country'
    }
  },

  website: {
    presence: {
      allowEmpty: false,
      message: '^Please enter your website'
    },
    length: {
      minimum: 1,
      maximum: 50,
      message: '^Your website must be less than 50 characters'
    },
    format: {
      pattern: '^^(http:\\/\\/www\\.|https:\\/\\/www\\.|http:\\/\\/|https:\\/\\/)?[a-z0-9]+([\\-\\.]{1}[a-z0-9]+)*\\.[a-z]{2,8}(:[0-9]{1,5})?(\\/.*)?$',
      message: '^Your website is not a valid Url'
    }
  },

  mobile: {
    presence: {
      message: '^Please enter your mobile number'
    },
    length: {
      minimum: 10,
      maximum: 15,
      message: '^Your mobile number must be less than 15 characters'
    }
  },


  note: {
    presence: {
      allowEmpty: false,
      message: '^Please enter your job title'
    },
    length: {
      minimum: 1,
      maximum: 20,
      message: '^Your job title must be less than 20 characters'
    }
  },


  amount: {
    presence: {
      allowEmpty: false,
      message: '^Please enter a number'
    },
    length: {
      minimum: 1,
      maximum: 20,
      message: '^Please enter a valid number'
    }
  },

  minute: {
    presence: {
      allowEmpty: false,
      message: '^Please enter Rate Expiration'
    },
    numericality: {
      onlyInteger: true,
      greaterThan: 0,
      message: '^Please enter a valid minute'
    }
  },

  password: {
    presence: {
      allowEmpty: false,
      message: '^Please enter a password'
    },
    format: {
      pattern: /(?=.*\d)(?=.*[a-z-A-Z]).{8,}/,
      message: '^8 characters minimum, containing letters and numbers'
    }
  },

  confirmPassword: {
    presence: true
  },

  code: {
    presence: {
      allowEmpty: false,
      message: '^Please enter the code'
    },
    length: {
      minimum: 6,
      maximum: 6,
      message: '^The code must be 6 digit'
    },
    numericality: {
      onlyInteger: true,
      message: '^Please enter a valid code'
    }
  },

  phone: {
    presence: {
      allowEmpty: false,
      message: '^Please enter a phone number'
    },
    length: {
      minimum: 10,
      maximum: 16,
      message: '^Please enter a valid phone number'
    },
    numericality: {
      onlyInteger: true,
      message: '^Please enter a valid phone number'
    }
  }
}

export default validation
