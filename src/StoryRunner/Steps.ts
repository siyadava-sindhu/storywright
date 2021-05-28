export class Steps {
  steps = [];

  public snapshot(name: string, opts: any) {
    var step = {
      type: 'saveScreenshot',
      name: name,
      locator: {}
    };
    if (opts && typeof opts.cropTo === 'string') {
      step.type = 'cropScreenshot';
      step.locator = {
        type: 'css selector',
        value: opts.cropTo
      };
    }
    this.steps.push(step);
    return this;
  }

  public url(url: string) {
    var step = {
      type: 'url',
      url: url
    };
    this.steps.push(step);
    return this;
  }

  public end() {
    return this.steps;
  }

  public click(selector, options) {
    var step = {
      type: 'clickElement',
      locator: {
        type: 'css selector',
        value: selector
      },
      maxTime: ''
    };
    if (options && options.maxTime) {
      step.maxTime = options.maxTime;
    }
    this.steps.push(step);
    return this;
  }

  public hover(selector) {
    var step = {
      type: 'moveTo',
      locator: {
        type: 'css selector',
        value: selector
      }
    };
    this.steps.push(step);
    return this;
  }

  public mouseDown(selector) {
    var step = {
      type: 'clickAndHoldElement',
      locator: {}
    };
    if (selector) {
      step.locator = {
        type: 'css selector',
        value: selector
      };
    }
    this.steps.push(step);
    return this;
  }

  public mouseUp(selector) {
    var step = {
      type: 'releaseElement',
      locator: {}
    };
    if (selector) {
      step.locator = {
        type: 'css selector',
        value: selector
      };
    }
    this.steps.push(step);
    return this;
  }

  public setValue(selector, text, options) {
    var step = {
      type: 'setElementText',
      locator: {
        type: 'css selector',
        value: selector
      },
      text: text,
      isPassword: false
    };
    if (options && options.isPassword) {
      step.isPassword = true;
    }
    this.steps.push(step);
    return this;
  }

  public clearValue(selector) {
    var step = {
      type: 'clearElementText',
      locator: {
        type: 'css selector',
        value: selector
      }
    };
    this.steps.push(step);
    return this;
  }

  public keys(selector, keys) {
    var step = {
      type: 'sendKeys',
      locator: {
        type: 'css selector',
        value: selector
      },
      keys: keys
    };
    this.steps.push(step);
    return this;
  }

  public focus(selector) {
    return this.keys(selector, '');
  }

  public executeScript(code, isAsync) {
    var step = {
      type: 'executeScript',
      code: code,
      isAsync: false
    };
    if (isAsync === true) {
      step.isAsync = true;
    }
    this.steps.push(step);
    return this;
  }

  public ignore(selector) {
    var step = {
      type: 'ignoreElements',
      locator: {
        type: 'css selector',
        value: selector
      }
    };
    this.steps.push(step);
    return this;
  }

  public clearIgnores() {
    var step = {
      type: 'clearIgnores'
    };
    this.steps.push(step);
    return this;
  }

  public wait(msOrSelector, options) {
    var step;
    if (typeof msOrSelector === 'number') {
      step = {
        type: 'pause',
        waitTime: msOrSelector
      };
    } else {
      step = {
        type: 'waitForElementPresent',
        locator: {
          type: 'css selector',
          value: msOrSelector
        }
      };
      if (options && options.maxTime) {
        step.maxTime = options.maxTime;
      }
    }
    this.steps.push(step);
    return this;
  }

  public waitForNotFound(selector, options) {
    var step = {
      type: 'waitForElementNotPresent',
      locator: {
        type: 'css selector',
        value: selector
      },
      maxTime: ''
    };
    if (options && options.maxTime) {
      step.maxTime = options.maxTime;
    }
    this.steps.push(step);
    return this;
  }

  public rtl() {
    var step = {
      type: 'executeScript',
      code: 'document.documentElement.dir = "rtl";'
    };
    this.steps.push(step);
    return this;
  }

  public ltr() {
    var step = {
      type: 'executeScript',
      code: 'document.documentElement.dir = "ltr";'
    };
    this.steps.push(step);
    return this;
  }

  public cssAnimations(isEnabled) {
    var step = {
      type: 'cssAnimations',
      isEnabled: isEnabled
    };
    this.steps.push(step);
    return this;
  }
}