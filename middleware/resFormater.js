const sendFormatter = (req, res, next) => {
  res.sendFormat = (data = {}, message = "success", status = 200) => {
    return res.status(status).json({
      status,
      message,
      data,
    });
  };

  next();
};

module.exports = sendFormatter;
