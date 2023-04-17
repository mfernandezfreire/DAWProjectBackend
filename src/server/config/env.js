export default {
  nodeEnv: process.env.NODE_ENV || 'DEV',
  port: Number(process.env.SERVER_PORT) || 8000,
  host: process.env.SERVER_HOST || '0.0.0.0',
  xFROM: process.env.XFROM,
  ddbbUser: process.env.DDBB_USER,
  ddbbName: process.env.DDBB_NAME,
  ddbbSocketPath: process.env.socketPath || '',
  ddbbPassword: process.env.password || '',
};
