// Define some variables and give them default values, but overwrite them with values from process.env if they exist there
export const { LOGS_DIR = './logs/', NODE_ENV = 'development' } = process.env
export const IN_PRODUCTION = NODE_ENV === 'production'
