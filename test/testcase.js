describe('eventBus', function() {
  describe('eventBus ', function() {
    it('should be a object', function() {
      expect(eventBus).to.not.be.empty;
      
    });
    it('has all the properties', function() {

      expect(eventBus).to.have.property('stopEventCycle');
      expect(eventBus).to.have.property('register');
        expect(eventBus).to.have.property('notify')
    });

  });
});
