class Schedule {
    constructor({
      id = 'id',
      productId = 'productId',
      isActive = true,
      startDate = 'None',
      endDate = 'None',
      createdAt = 'None',
      updatedAt = 'None'
    } = {}) {
      this.id = id;
      this.productId = productId;
      this.isActive = isActive;
      this.startDate = startDate;
      this.endDate = endDate;
      this.createdAt = createdAt;
      this.updatedAt = updatedAt;
    }
  
    static toResponse(schedule) {
      const { id, ProductId, isActive, startDate, endDate, createdAt, updatedAt } = schedule;
      return { id, ProductId, isActive, startDate, endDate, createdAt, updatedAt };
    }
  }
  
  module.exports = Schedule
;