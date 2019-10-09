const Spot = require('../models/Spot');

module.exports = {
  async store(req, res) {
    return res.json({ ok: true });
  }
}
