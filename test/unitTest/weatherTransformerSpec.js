import chai from 'chai';
import server from '../../server';
import {
    addPath
} from 'app-module-path';
addPath(__dirname);
import weatherTransformer from '../../app/services/weather/transformer/weatherTransformer';
var expect = chai.expect;


describe('Test case for App Transformer with empty Array', function() {
    it('it should build proper response object', function() {
        expect(weatherTransformer.transform([])).to.deep.equal([])
    });
    it('it should build proper response object ', function() {
        expect(weatherTransformer.transform([])).to.deep.equal([])
    });
})

describe('Test case for App Transformer with empty Object', function() {
    it('it should build proper response object', function() {
        expect(weatherTransformer.transform({})).to.deep.equal({})
    });
    it('it should build proper response object ', function() {
        expect(weatherTransformer.transform({})).to.deep.equal({})
    });
})

describe('Test case for App Transformer with empty Object', function() {

    let expected = {
        "time": 1488738600,
        "summary": "Clear throughout the day.",
        "icon": "clear-day",
        "sunriseTime": 1488763044,
        "sunsetTime": 1488805307
    };
    let obj = {
        currently: {
            "time": 1488738600,
            "summary": "Clear throughout the day.",
            "icon": "clear-day",
            "sunriseTime": 1488763044,
            "sunsetTime": 1488805307
        },
        daily: {
            data: [{
                "time": 1488738600,
                "summary": "Clear throughout the day.",
                "icon": "clear-day",
                "sunriseTime": 1488763044,
                "sunsetTime": 1488805307
            }, {
                "time": 1488738600,
                "summary": "Clear throughout the day.",
                "icon": "clear-day",
                "sunriseTime": 1488763044,
                "sunsetTime": 1488805307
            }, {
                "time": 1488738600,
                "summary": "Clear throughout the day.",
                "icon": "clear-day",
                "sunriseTime": 1488763044,
                "sunsetTime": 1488805307
            }]
        }

    };

    it('it should build proper response object for Monday', function() {
        expect(weatherTransformer.transform(obj, 'monday')).to.deep.equal(expected)
    });
    it('it should build proper response object for Today  ', function() {
        expect(weatherTransformer.transform(obj, 'today')).to.deep.equal(expected)
    });
    it('it should build proper response object for Tuesday  ', function() {
        expect(weatherTransformer.transform(obj, 'tuesday')).to.deep.equal(expected)
    });
})
