class programController {
  static async getList(req, res, next) {
    try {
      return res.json({
        data: {
          rows: [],
          limit: 10,
          count: 50
        },
      });
    } catch (error) {
      return next(error);
    }
  }

  static async getById(req, res, next) {
    try {
      const { id } = req.params;
      return res.json({
        data: { id, name: 'set up program route' },
      });
    } catch (error) {
      return next(error);
    }
  }
}

module.exports = programController;