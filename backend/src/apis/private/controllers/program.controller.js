class programController {
  static async create(req, res, next) {
    try {
      const data = req.body;
      return res.json({
        data: {
          data: { id: 1, ...data },
        },
      });
    } catch (error) {
      return next(error);
    }
  }

  static async delete(req, res, next) {
    try {
      const { id } = req.params;
      return res.json({
        data: { id },
      });
    } catch (error) {
      return next(error);
    }
  }
}

export default programController;