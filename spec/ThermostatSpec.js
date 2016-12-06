describe("Thermostat", function(){
  var thermostat;

  beforeEach( function(){
    thermostat = new Thermostat();
  });

  it("should start at 20 degrees", function(){
    expect(thermostat.getTemperature()).toEqual(20);
  });

  it("should increase the temperature", function(){
    thermostat.up();
    expect(thermostat.getTemperature()).toEqual(21);
  });

  it("should decrease the temperature", function (){
    thermostat.down();
    expect(thermostat.getTemperature()).toEqual(19);
  });

  it("should not decrease more than 10 degrees", function(){
    for (var i = 1; i <= 20; i++){
      thermostat.down();
    }
      expect(thermostat.getTemperature()).toEqual(10)
  });

  it("should not increase more than 25 degrees", function(){
    for (var i = 0; i <10; i++){
      thermostat.up();
    }
    expect(thermostat.getTemperature()).toEqual(25);
  });

  it("should change power saving mode", function(){
    thermostat.changeMode();
    expect(thermostat.maximumTemperature()).toEqual(32);
  });

  it("should increase up to 32 degrees if saving mode is off", function(){
    thermostat.changeMode();
    for (var i = 0; i < 12; i++){
      thermostat.up();
    }
    expect(thermostat.getTemperature()).toEqual(32);
  });

  it("should have a reset function", function(){
    for(var i = 0; i < 8; i++){
      thermostat.down();
    }
    thermostat.reset();
    expect(thermostat.getTemperature()).toEqual(20);
  });

});
