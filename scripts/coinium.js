/**
 * Created by Zsolti on 2017.08.11..
 */

$('.currency-selector').click(function(){
    $(this).addClass('btn-success').siblings().removeClass('btn-success')
});

$('.date-selector').click(function(){
    $(this).addClass('btn-warning').siblings().removeClass('btn-warning')
});


/*****************/
/*  SHARE PRICES */
/****************/

var eur = ' &#8364;';
var usd = ' &#36;';
var ft  = ' Ft';
var eurft, usdft, eth, btc, ltc, neo, eos, dash;


//BTC

$.get("https://cors-anywhere.herokuapp.com/https://api.cryptowat.ch/markets/kraken/btceur/price", function (data) {
    btc = parseFloat(data.result.price).toFixed(2);
    $("#btc-value").html(parseFloat(data.result.price).toFixed(2) + eur);
});

//ETH

$.get("https://cors-anywhere.herokuapp.com/https://api.cryptowat.ch/markets/kraken/etheur/price", function (data) {
    $("#eth-value").html(parseFloat(data.result.price).toFixed(2) + eur);
});

//ZCASH

$.get("https://cors-anywhere.herokuapp.com/https://api.cryptowat.ch/markets/kraken/zeceur/price", function (data) {
    $("#zcash-value").html(parseFloat(data.result.price).toFixed(2) + eur);
});

//EOS
$.get("https://cors-anywhere.herokuapp.com/https://api.cryptowat.ch/markets/kraken/eoseur/price", function (data) {
    $("#eos-value").html(parseFloat(data.result.price).toFixed(2) + eur);
});

//DASH

$.get("https://cors-anywhere.herokuapp.com/https://api.cryptowat.ch/markets/kraken/dasheur/price", function (data) {
    $("#dash-value").html(parseFloat(data.result.price).toFixed(2) + eur);
});

//LTC

$.get("https://cors-anywhere.herokuapp.com/https://api.cryptowat.ch/markets/kraken/ltceur/price", function (data) {
    $("#ltc-value").html(parseFloat(data.result.price).toFixed(2) + eur);
});

$("#Euro").click(function() {
    //BTC

    $.get("https://cors-anywhere.herokuapp.com/https://api.cryptowat.ch/markets/kraken/btceur/price", function (data) {
        $("#btc-value").html(parseFloat(data.result.price).toFixed(2) + eur);
    });

    //ETH

    $.get("https://cors-anywhere.herokuapp.com/https://api.cryptowat.ch/markets/kraken/etheur/price", function (data) {
        $("#eth-value").html(parseFloat(data.result.price).toFixed(2) + eur);
    });

    //ZCASH

    $.get("https://cors-anywhere.herokuapp.com/https://api.cryptowat.ch/markets/kraken/zeceur/price", function (data) {
        $("#zcash-value").html(parseFloat(data.result.price).toFixed(2) + eur);
    });

    //EOS
    $.get("https://cors-anywhere.herokuapp.com/https://api.cryptowat.ch/markets/kraken/eoseur/price", function (data) {
        $("#eos-value").html(parseFloat(data.result.price).toFixed(2) + eur);
    });


    //DASH

    $.get("https://cors-anywhere.herokuapp.com/https://api.cryptowat.ch/markets/kraken/dasheur/price", function (data) {
        $("#dash-value").html(parseFloat(data.result.price).toFixed(2) + eur);
    });

    //LTC

    $.get("https://cors-anywhere.herokuapp.com/https://api.cryptowat.ch/markets/kraken/ltceur/price", function (data) {
        $("#ltc-value").html(parseFloat(data.result.price).toFixed(2) + eur);
    });

});

$("#Dollar").click(function() {

    //BTC

    $.get("https://cors-anywhere.herokuapp.com/https://api.cryptowat.ch/markets/kraken/btcusd/price", function (data) {
        $("#btc-value").html(parseFloat(data.result.price).toFixed(2) + usd);
    });

    //ETH

    $.get("https://cors-anywhere.herokuapp.com/https://api.cryptowat.ch/markets/kraken/ethusd/price", function (data) {
        $("#eth-value").html(parseFloat(data.result.price).toFixed(2) + usd);
    });

    //ZCASH

    $.get("https://cors-anywhere.herokuapp.com/https://api.cryptowat.ch/markets/kraken/zecusd/price", function (data) {
        $("#zcash-value").html(parseFloat(data.result.price).toFixed(2) + usd);
    });

    //EOS
    $.get("https://cors-anywhere.herokuapp.com/https://api.cryptowat.ch/markets/kraken/eosusd/price", function (data) {
        $("#eos-value").html(parseFloat(data.result.price).toFixed(2) + usd);
    });

    //DASH

    $.get("https://cors-anywhere.herokuapp.com/https://api.cryptowat.ch/markets/kraken/dashusd/price", function (data) {
        $("#dash-value").html(parseFloat(data.result.price).toFixed(2) + usd);
    });

    //LTC

    $.get("https://cors-anywhere.herokuapp.com/https://api.cryptowat.ch/markets/kraken/ltcusd/price", function (data) {
        $("#ltc-value").html(parseFloat(data.result.price).toFixed(2) + usd);
    });
});

$("#Forint").click(function() {
    //BTC

    $.get("https://cors-anywhere.herokuapp.com/https://api.cryptowat.ch/markets/kraken/btceur/price", function (data) {
        $("#btc-value").html((parseFloat(data.result.price)*eurft).toFixed(2) + ft);
    });

    //ETH

    $.get("https://cors-anywhere.herokuapp.com/https://api.cryptowat.ch/markets/kraken/etheur/price", function (data) {
        $("#eth-value").html((parseFloat(data.result.price)*eurft).toFixed(2) + ft);
    });

    //ZCASH

    $.get("https://cors-anywhere.herokuapp.com/https://api.cryptowat.ch/markets/kraken/zeceur/price", function (data) {
        $("#zcash-value").html((parseFloat(data.result.price)*eurft).toFixed(2) + ft);
    });

    //EOS
    $.get("https://cors-anywhere.herokuapp.com/https://api.cryptowat.ch/markets/kraken/eoseur/price", function (data) {
        $("#eos-value").html((parseFloat(data.result.price)*eurft).toFixed(2) + ft);
    });


    //DASH

    $.get("https://cors-anywhere.herokuapp.com/https://api.cryptowat.ch/markets/kraken/dasheur/price", function (data) {
        $("#dash-value").html((parseFloat(data.result.price)*eurft).toFixed(2) + ft);
    });

    //LTC

    $.get("https://cors-anywhere.herokuapp.com/https://api.cryptowat.ch/markets/kraken/ltceur/price", function (data) {
        $("#ltc-value").html((parseFloat(data.result.price)*eurft).toFixed(2) + ft);
    });

});

/**********************/
/*  PORTFOLIO PRICES */
/*********************/

console.log(btc);
console.log(eurft);
$("#portfolio-btc-value").html(parseFloat(btc)*parseFloat(eurft) + ft);

/*****************/
/*  DEVIZA PRICES */
/****************/

$(document).ready(function() {



    //OTP-EUR

    $.ajax({
        type: "GET",
        url: "https://cors-anywhere.herokuapp.com/http://api.napiarfolyam.hu/?bank=otp",
        dataType: "xml",
        success: function (xml) {

            //console.log(xml);

            var items = $(xml).find("item").filter(function () {
                return $('penznem', this).text() == 'EUR';
            });

            items.each(function(){
                eurft = parseFloat($(this).find('eladas').text()).toFixed(2);
                $("#eur-value").html( eurft + ' Ft');
            });
        }

    });

    //OTP-USD

    $.ajax({
        type: "GET",
        url: "https://cors-anywhere.herokuapp.com/http://api.napiarfolyam.hu/?bank=otp",
        dataType: "xml",
        success: function (xml) {

            //console.log(xml);

            var items = $(xml).find("item").filter(function () {
                return $('penznem', this).text() == 'USD';
            });

            items.each(function (){
                usdft = parseFloat($(this).find('eladas').text()).toFixed(2);
                $("#usd-value").html( usdft + ' Ft');
            });
        }

    });
/*
    var chart = new cryptowatch.Embed('kraken', 'etheur', {
        timePeriod: '1d',
        width: 650,
        customColorScheme: {
            bg:           "000000",
            text:         "b2b2b2",
            textStrong:   "e5e5e5",
            textWeak:     "7f7f7f",
            short:        "FD4600",
            shortFill:    "FF672C",
            long:         "6290FF",
            longFill:     "002782",
            cta:          "363D52",
            ctaHighlight: "414A67",
            alert:        "FFD506"
        }
    });
    //chart.mount('#chart1');*/
});

