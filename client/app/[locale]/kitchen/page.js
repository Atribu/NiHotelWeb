// app/food/page.jsx
"use client";

import Image from "next/image";
import Link from "next/link";
import banner from "../../../public/images/breakfast/DSCF8600.webp";
import { useTranslations } from "next-intl";
import img1 from "../../../public/images/menu/breakfast/kahvaltiTabak.webp";
import img2 from "../../../public/images/menu/breakfast/serpme.webp";
import img3 from "../../../public/images/menu/breakfast/tost.webp";
import img4 from "../../../public/images/menu/breakfast/salcaTost.webp";
import img5 from "../../../public/images/menu/breakfast/otlutost.webp";
import img6 from "../../../public/images/menu/breakfast/sucuklutost.webp";
import img7 from "../../../public/images/menu/breakfast/pancarli.webp";
import img8 from "../../../public/images/menu/breakfast/mantarli.webp";
import img9 from "../../../public/images/menu/breakfast/otlu.webp";
import img10 from "../../../public/images/menu/breakfast/omlet.webp";
import img11 from "../../../public/images/menu/breakfast/otluomlet.webp";
import img12 from "../../../public/images/menu/breakfast/mantarliomlet.webp";
import img13 from "../../../public/images/menu/breakfast/kasarliomlet.webp";
import img14 from "../../../public/images/menu/breakfast/jambonlu.webp";
import img15 from "../../../public/images/menu/breakfast/lapa.webp";
import img16 from "../../../public/images/menu/breakfast/yumurta.webp";

import main1 from "../../../public/images/menu/maincourse/pizza.webp";
import main2 from "../../../public/images/menu/maincourse/pizza2.webp";
import main3 from "../../../public/images/menu/maincourse/pizza3.webp";
import main4 from "../../../public/images/menu/maincourse/burger1.webp";
import main5 from "../../../public/images/menu/maincourse/kidsburger.webp";
import main6 from "../../../public/images/menu/maincourse/burger2.webp";
import main7 from "../../../public/images/menu/maincourse/veganwrap.webp";
import main8 from "../../../public/images/menu/maincourse/veganwrap2.webp";
import main9 from "../../../public/images/menu/maincourse/makarna1.webp";
import main10 from "../../../public/images/menu/maincourse/makarna2.webp";
import main11 from "../../../public/images/menu/maincourse/makarna3.webp";
import main12 from "../../../public/images/menu/maincourse/makarna4.webp";
import main13 from "../../../public/images/menu/maincourse/fittavuk.webp";
import main14 from "../../../public/images/menu/maincourse/fitet.webp";
import main15 from "../../../public/images/menu/maincourse/manti.webp";
import main16 from "../../../public/images/menu/maincourse/italymeatball.webp";
import main17 from "../../../public/images/menu/maincourse/tavukbonfile.webp";
import main18 from "../../../public/images/menu/maincourse/tavukfajita.webp";
import main19 from "../../../public/images/menu/maincourse/sinitzel.webp";
import main20 from "../../../public/images/menu/maincourse/tavukturn.webp";

import main21 from "../../../public/images/menu/maincourse/corba.webp";
import main22 from "../../../public/images/menu/maincourse/corba2.webp";

import snack1 from "../../../public/images/menu/snacks/biratabak.webp";
import snack2 from "../../../public/images/menu/snacks/citirtavuk.webp";
import snack3 from "../../../public/images/menu/snacks/patates.webp";
import snack4 from "../../../public/images/menu/snacks/kuruyemis.webp";
import snack5 from "../../../public/images/menu/snacks/cheese.webp";
import snack6 from "../../../public/images/menu/snacks/cips.webp";

import salad1 from "../../../public/images/menu/salad/salata.webp";
import salad2 from "../../../public/images/menu/salad/salata2.webp";
import salad3 from "../../../public/images/menu/salad/salata3.webp";
import salad4 from "../../../public/images/menu/salad/salata4.webp";

import drink1 from "../../../public/images/menu/drinks/espresso.webp";
import drink2 from "../../../public/images/menu/drinks/espresso2.webp";
import drink3 from "../../../public/images/menu/drinks/ristretto.webp";
import drink4 from "../../../public/images/menu/drinks/coffeecreme.webp";
import drink5 from "../../../public/images/menu/drinks/longblack.webp";
import drink6 from "../../../public/images/menu/drinks/americano.webp";
import drink7 from "../../../public/images/menu/drinks/cappuccino.webp";
import drink8 from "../../../public/images/menu/drinks/lattemachiato.webp";
import drink9 from "../../../public/images/menu/drinks/espressomachiato.webp";
import drink10 from "../../../public/images/menu/drinks/coffeelatte.webp";
import drink11 from "../../../public/images/menu/drinks/whitemocha.webp";
import drink12 from "../../../public/images/menu/drinks/flatwhite.webp";
import drink13 from "../../../public/images/menu/drinks/cafemocha.webp";
import drink14 from "../../../public/images/menu/drinks/turkcafe.webp";
import drink15 from "../../../public/images/menu/drinks/elmatea.webp";
import drink16 from "../../../public/images/menu/drinks/greetea.webp";
import drink17 from "../../../public/images/menu/drinks/tea.webp";

import beer1 from "../../../public/images/menu/drinks/beers/efes.webp";
import beer2 from "../../../public/images/menu/drinks/beers/miller.webp";
import beer3 from "../../../public/images/menu/drinks/beers/wave.webp";
import beer4 from "../../../public/images/menu/drinks/beers/tuborgfiltresiz.webp";
import beer5 from "../../../public/images/menu/drinks/beers/malt.webp";
import beer6 from "../../../public/images/menu/drinks/beers/amber.webp";
import beer7 from "../../../public/images/menu/drinks/beers/luna.webp";
import beer8 from "../../../public/images/menu/drinks/beers/carlsberg.webp";
import beer9 from "../../../public/images/menu/drinks/beers/blanc.webp";
import beer10 from "../../../public/images/menu/drinks/beers/solbia.webp";
import beer11 from "../../../public/images/menu/drinks/beers/desperados.webp";
import beer12 from "../../../public/images/menu/drinks/beers/weihen.webp";
import beer13 from "../../../public/images/menu/drinks/beers/guinness.webp";
import beer14 from "../../../public/images/menu/drinks/beers/corona.webp";

import whisky1 from "../../../public/images/menu/drinks/whiskeys/regal35.webp";
import whisky2 from "../../../public/images/menu/drinks/whiskeys/chivas12.webp";
import whisky3 from "../../../public/images/menu/drinks/whiskeys/chivas75.webp";
import whisky4 from "../../../public/images/menu/drinks/whiskeys/chivas121000.webp";
import whisky5 from "../../../public/images/menu/drinks/whiskeys/regal1875.webp";
import whisky6 from "../../../public/images/menu/drinks/whiskeys/jack35.webp";
import whisky7 from "../../../public/images/menu/drinks/whiskeys/glenfiddic.webp";
import whisky8 from "../../../public/images/menu/drinks/whiskeys/glenfiddich1570.webp";
import whisky9 from "../../../public/images/menu/drinks/whiskeys/glenfiddich1870.webp";
import whisky10 from "../../../public/images/menu/drinks/whiskeys/glenmorangie.webp";
import whisky11 from "../../../public/images/menu/drinks/whiskeys/walker1235.webp";
import whisky12 from "../../../public/images/menu/drinks/whiskeys/walker1270.webp";
import whisky13 from "../../../public/images/menu/drinks/whiskeys/walker1870.webp";
import whisky14 from "../../../public/images/menu/drinks/whiskeys/walkerred.webp";
import whisky15 from "../../../public/images/menu/drinks/whiskeys/daniel35.webp";
import whisky16 from "../../../public/images/menu/drinks/whiskeys/daniel50.webp";
import whisky17 from "../../../public/images/menu/drinks/whiskeys/daniels70.webp";
import whisky18 from "../../../public/images/menu/drinks/whiskeys/glenlivet12.webp";
import whisky19 from "../../../public/images/menu/drinks/whiskeys/glenlivet15.webp";

import vodka1 from "../../../public/images/menu/drinks/vodkas/absolut.webp";
import vodka2 from "../../../public/images/menu/drinks/vodkas/pears.webp";
import vodka3 from "../../../public/images/menu/drinks/vodkas/raspberry.webp";
import vodka4 from "../../../public/images/menu/drinks/vodkas/smirnof35.webp";
import vodka5 from "../../../public/images/menu/drinks/vodkas/smirnoff100.webp";
import vodka6 from "../../../public/images/menu/drinks/vodkas/gilbeys.webp";

import tequila1 from "../../../public/images/menu/drinks/tequila/sierra.webp";
import tequila2 from "../../../public/images/menu/drinks/tequila/olmeca.webp";

import gin1 from "../../../public/images/menu/drinks/gins/gilbeysgin.webp";
import gin2 from "../../../public/images/menu/drinks/gins/gordons.webp";

import wine1 from "../../../public/images/menu/drinks/wines/kabatepe.webp";
import wine2 from "../../../public/images/menu/drinks/wines/beroniarose.webp";
import wine3 from "../../../public/images/menu/drinks/wines/casalmendesrose.webp";
import wine4 from "../../../public/images/menu/drinks/wines/angorabeyaz.webp";
import wine5 from "../../../public/images/menu/drinks/wines/dolucabeyaz18.webp";
import wine6 from "../../../public/images/menu/drinks/wines/selectionbeyaz.webp";
import wine7 from "../../../public/images/menu/drinks/wines/dolucared37.webp";
import wine8 from "../../../public/images/menu/drinks/wines/selectonred.webp";
import wine9 from "../../../public/images/menu/drinks/wines/idolred.webp";

import champagne from "../../../public/images/menu/drinks/champagnes/prosecco.webp";

import raki1 from "../../../public/images/menu/drinks/raki/tekirdag.webp";
import raki2 from "../../../public/images/menu/drinks/raki/efesgold.webp";
import raki3 from "../../../public/images/menu/drinks/raki/yeniraki.webp";

import liqueur1 from "../../../public/images/menu/drinks/liqueurs/jager.webp";
import liqueur2 from "../../../public/images/menu/drinks/liqueurs/whiterum.webp";
import liqueur3 from "../../../public/images/menu/drinks/liqueurs/archers.webp";
import liqueur4 from "../../../public/images/menu/drinks/liqueurs/cardinal.webp";
import liqueur5 from "../../../public/images/menu/drinks/liqueurs/baileys.webp";
import liqueur6 from "../../../public/images/menu/drinks/liqueurs/martini.webp";
import liqueur7 from "../../../public/images/menu/drinks/liqueurs/hurricane.webp";

import cocktail1 from "../../../public/images/menu/drinks/cocktails/cintonik.webp";
import cocktail2 from "../../../public/images/menu/drinks/cocktails/beach.webp";
import cocktail3 from "../../../public/images/menu/drinks/cocktails/mojito.webp";
import cocktail4 from "../../../public/images/menu/drinks/cocktails/margarita.webp";
import cocktail5 from "../../../public/images/menu/drinks/cocktails/pinacolada.webp";
import cocktail6 from "../../../public/images/menu/drinks/cocktails/bloodymary.webp";
import cocktail7 from "../../../public/images/menu/drinks/cocktails/daiquiri.webp";
import cocktail8 from "../../../public/images/menu/drinks/cocktails/drymartini.webp";
import cocktail9 from "../../../public/images/menu/drinks/cocktails/alkolsuzmojito.webp";
import cocktail10 from "../../../public/images/menu/drinks/cocktails/churchill.webp";

import icedcoffee1 from "../../../public/images/menu/drinks/icedcoffees/francoccino.webp";
import icedcoffee2 from "../../../public/images/menu/drinks/icedcoffees/icedcoffeemocha.webp";
import icedcoffee3 from "../../../public/images/menu/drinks/icedcoffees/icedamericano.webp";
import icedcoffee4 from "../../../public/images/menu/drinks/icedcoffees/icedcoffee.webp";
import icedcoffee5 from "../../../public/images/menu/drinks/icedcoffees/icedlatte.webp";

import frozen1 from "../../../public/images/menu/drinks/frozen/strawberry.webp";
import frozen2 from "../../../public/images/menu/drinks/frozen/banana.webp";

import soft1 from "../../../public/images/menu/drinks/soft/sODA1.webp";
import soft2 from "../../../public/images/menu/drinks/soft/cola2.webp";
import soft3 from "../../../public/images/menu/drinks/soft/cola3.webp";
import soft4 from "../../../public/images/menu/drinks/soft/fanta.webp";
import soft5 from "../../../public/images/menu/drinks/soft/yedigün.webp";
import soft6 from "../../../public/images/menu/drinks/soft/sprite.webp";
import soft7 from "../../../public/images/menu/drinks/soft/redbull.webp";
import soft8 from "../../../public/images/menu/drinks/soft/burn.webp";
import soft9 from "../../../public/images/menu/drinks/soft/schweppes.webp";
import soft10 from "../../../public/images/menu/drinks/soft/juss.webp";
import soft11 from "../../../public/images/menu/drinks/soft/juss2.webp";
import soft12 from "../../../public/images/menu/drinks/soft/portakalsuyu.webp";

export default function FoodPage() {
  const t = useTranslations("Kitchen");
  const t2 = useTranslations("Kitchen.Breakfast");
  const t3 = useTranslations("Kitchen.MainCourse");
  const t4 = useTranslations("Kitchen.DailyMenu");
  const t5 = useTranslations("Kitchen.Snack");
  const t6 = useTranslations("Kitchen.Salads");
  const t7 = useTranslations("Kitchen.CoffeeTea");
  const t8 = useTranslations("Kitchen.CocktailMenu");
  const t9 = useTranslations("Kitchen.IcedCoffees");
  const t10 = useTranslations("Kitchen.Frozen");
  const t11 = useTranslations("Kitchen.SoftDrinks");

  // Menu kategorileri
  const sections = [
    { id: "kahvalti", label: t("breakfast") },
    { id: "gunun-menu", label: t("dailySoupAndMealMenu") },
    { id: "ana-yemek", label: t("mainCourse") },
    { id: "pizzas", label: t3("pizzas") },
    { id: "hamburger", label: t3("hamburgers") },
    { id: "pastas", label: t3("pastas") },
    { id: "vegetarian", label: t3("vegetarian") },
    { id: "atistirmalik", label: t("snack") },
    { id: "salatalar", label: t("salads") },
    { id: "alkollu-icecek", label: t("alcoholicDrinks") },
    { id: "beers", label: t("beers") },
    { id: "whiskys", label: t("whiskys") },
    { id: "vodkas", label: t("vodkas") },
    { id: "tequilas", label: t("tequilas") },
    { id: "gins", label: t("gins") },
    { id: "wines", label: t("wines") },
    { id: "champagnes", label: t("champagnes") },
    { id: "rakis", label: t("rakis") },
    { id: "liqueurs", label: t("liqueurs") },
    { id: "cocktails", label: t("cocktails") },
    { id: "kahve-cay", label: t("coffeeTea") },
    { id: "iced-coffee", label: t("coffeeTea") },
    { id: "frozen", label: t("frozen") },
    { id: "soft-icecek", label: t("softDrinks") },
  ];

  // Menü verileri
  const kahvaltiMenu = [
    { title: t2("title1"), text: t2("text1"), image: img1 },
    { title: t2("title2"), text: t2("text2"), image: img2 },
    { title: t2("title3"), text: t2("text3"), image: img3 },
    { title: t2("title4"), text: t2("text4"), image: img4 },
    { title: t2("title5"), text: t2("text5"), image: img5 },
    { title: t2("title6"), text: t2("text6"), image: img6 },
    { title: t2("title7"), text: t2("text7"), image: img7 },
    { title: t2("title8"), text: t2("text8"), image: img8 },
    { title: t2("title9"), text: t2("text9"), image: img9 },
    { title: t2("title10"), text: t2("text10"), image: img10 },
    { title: t2("title11"), text: t2("text11"), image: img11 },
    { title: t2("title12"), text: t2("text12"), image: img12 },
    { title: t2("title13"), text: t2("text13"), image: img13 },
    { title: t2("title14"), text: t2("text14"), image: img14 },
    { title: t2("title15"), text: t2("text15"), image: img15 },
    { title: t2("title16"), text: t2("text16"), image: img16 },
  ];

  const gununMenu = [
    { title: t4("title1"), text: t4("text1"), image: main21 },
    { title: t4("title2"), text: t4("text2"), image: main22 },
  ];

  // Ana Yemek altındaki tüm alt kategoriler tek bir dizide toplanıyor
  const anaYemekMenu = [
    { title: t3("title15"), text: t3("text15"), image: main15 },
    { title: t3("title16"), text: t3("text16"), image: main16 },
    { title: t3("title17"), text: t3("text17"), image: main17 },
    // Tavuk
    { title: t3("title18"), text: t3("text18"), image: main18 },
    { title: t3("title19"), text: t3("text19"), image: main19 },
    { title: t3("title20"), text: t3("text20"), image: main20 },

    // Ni Fit
    { title: t3("title13"), text: t3("text13"), image: main13 },
    { title: t3("title14"), text: t3("text14"), image: main14 },
  ];

  const pizzas=[
    // Pizzalar
    { title: t3("title1"), text: t3("text1"), image: main1 },
    { title: t3("title2"), text: t3("text2"), image: main2 },
    { title: t3("title3"), text: t3("text3"), image: main3 },
  ];

  const hamburger =[
       // Hamburgerler
       { title: t3("title4"), text: t3("text4"), image: main4 },
       { title: t3("title5"), text: t3("text5"), image: main5 },
       { title: t3("title6"), text: t3("text6"), image: main6 },
  ];

  const pastas=[
    // Makarnalar
    { title: t3("title9"), text: t3("text9"), image: main9 },
    { title: t3("title10"), text: t3("text10"), image: main10 },
    { title: t3("title11"), text: t3("text11"), image: main11 },
    { title: t3("title12"), text: t3("text12"), image: main12 },
  ];

  const vegetarian =[
     // Vejeteryan
     { title: t3("title7"), text: t3("text7"), image: main7 },
     { title: t3("title8"), text: t3("text8"), image: main8 },
]

  const atistirmalikMenu = [
    { title: t5("title1"), text: t5("text1"), image: snack1 },
    { title: t5("title2"), text: t5("text2"), image: snack2 },
    { title: t5("title3"), text: t5("text3"), image: snack3 },
    { title: t5("title4"), text: t5("text4"), image: snack4 },
    { title: t5("title5"), text: t5("text5"), image: snack5 },
    { title: t5("title6"), text: t5("text6"), image: snack6 },
  ];

  const salatalarMenu = [
    { title: t6("title1"), text: t6("text1"), image: salad1 },
    { title: t6("title2"), text: t6("text2"), image: salad2 },
    { title: t6("title3"), text: t6("text3"), image: salad3 },
    { title: t6("title4"), text: t6("text4"), image: salad4 },
  ];

  const kahveCayMenu = [
    { title: t7("title1"), text: t7("text1"), image: drink1 },
    { title: t7("title2"), text: t7("text1"), image: drink2 },
    { title: t7("title3"), text: t7("text1"), image: drink3 },
    { title: t7("title4"), text: t7("text1"), image: drink4 },
    { title: t7("title5"), text: t7("text1"), image: drink5 },
    { title: t7("title6"), text: t7("text1"), image: drink6 },
    { title: t7("title7"), text: t7("text1"), image: drink7 },
    { title: t7("title8"), text: t7("text1"), image: drink8 },
    { title: t7("title9"), text: t7("text1"), image: drink9 },
    { title: t7("title10"), text: t7("text1"), image: drink10 },
    { title: t7("title11"), text: t7("text1"), image: drink11 },
    { title: t7("title12"), text: t7("text1"), image: drink12 },
    { title: t7("title13"), text: t7("text1"), image: drink13 },
    { title: t7("title14"), text: t7("text1"), image: drink14 },
    { title: t7("title15"), text: t7("text1"), image: drink15 },
    { title: t7("title16"), text: t7("text1"), image: drink16 },
    { title: t7("title17"), text: t7("text1"), image: drink17 },
  ];

  const beerMenu = [
    { title: "Efes Malt", text: "25 cl", image: beer1 },
    { title: "Miller", text: "25 cl", image: beer2 },
    { title: "Tuborg Wave", text: "50 cl", image: beer3 },
    { title: "Tuborg Filtresiz", text: "50 cl", image: beer4 },
    { title: "Tuborg Malt", text: "50 cl", image: beer5 },
    { title: "Tuborg Amber", text: "50 cl", image: beer6 },
    { title: "Carlsberg Luna", text: "50 cl", image: beer7 },
    { title: "Carlsberg", text: "50 cl", image: beer8 },
    { title: "Blanc", text: "33 cl", image: beer9 },
    { title: "Sol Bia", text: "33 cl", image: beer10 },
    { title: "Desperados", text: "33 cl", image: beer11 },
    { title: "Weihenstephaner", text: "33 cl", image: beer12 },
    { title: "Guinness", text: "44 cl", image: beer13 },
    { title: "Corona", text: "35 cl", image: beer14 },
  ];

  const whiskys = [
    { title: "Chivas Regal", text: "35 cl", image: whisky1 },
    { title: "Chivas Regal 12 yo", text: "50 cl", image: whisky2 },
    { title: "Chivas Regal 12 yo 50", text: "75 cl", image: whisky3 },
    { title: "Chivas Regal 12 yo 100", text: "100 cl", image: whisky4 },
    { title: "Chivas Regal 18 yo", text: "70 cl", image: whisky5 },
    { title: "Gentleman Jack", text: "35 cl", image: whisky6 },
    { title: "Glenfiddich 12 yo", text: "70 cl", image: whisky7 },
    { title: "Glenfiddich 15 yo", text: "70 cl", image: whisky8 },
    { title: "Glenfiddich 18 yo", text: "70 cl", image: whisky9 },
    { title: "Glenmorangie 10 yo", text: "35 cl", image: whisky10 },
    {
      title: "Johnnie Walker Black Label 12 yo 35",
      text: "35 cl",
      image: whisky11,
    },
    {
      title: "Johnnie Walker Black Label 12 yo 70",
      text: "70 cl",
      image: whisky12,
    },
    {
      title: "Johnnie Walker Black Label 18 yo",
      text: "70 cl",
      image: whisky13,
    },
    { title: "Johnnie Walker Red Label", text: "70 cl", image: whisky14 },
    { title: "Jack Daniels 35", text: "35 cl", image: whisky15 },
    { title: "Jack Daniels 50", text: "50 cl", image: whisky16 },
    { title: "Jack Daniels", text: "70 cl", image: whisky17 },
    { title: "The Glenlivet 12 yo", text: "70 cl", image: whisky18 },
    { title: "The Glenlivet 15 yo", text: "70 cl", image: whisky19 },
  ];

  const vodkas = [
    { title: "Absolut", text: "50 cl", image: vodka1 },
    { title: "Absolut Pears", text: "70 cl", image: vodka2 },
    { title: "Absolut Raspberri", text: "70 cl", image: vodka3 },
    { title: "Smirnoff Vodka 35", text: "35 cl", image: vodka4 },
    { title: "Smirnoff Vodka", text: "100 cl", image: vodka5 },
    { title: "Gilbey’s", text: "70 cl", image: vodka6 },
  ];

  const tequilaMenu = [
    { title: "Sierra Tequila", text: "50 cl", image: tequila1 },
    { title: "Olmeca Tequila", text: "70 cl", image: tequila2 },
  ];

  const ginMenu = [
    { title: "Gilbey’s Gin", text: "70 cl", image: gin1 },
    { title: "Gordon’s", text: "100 cl", image: gin2 },
  ];

  const wineMenu = [
    { title: `Kabatepe ${t8("blush")}`, text: "37.5 cl", image: wine1 },
    { title: "Beronia Rose", text: "75 cl", image: wine2 },
    { title: "Casal Mendes Rose", text: "75 cl", image: wine3 },

    { title: `Angora ${t8("whitewine")}`, text: "75 cl", image: wine4 },
    { title: `Villa Doluca ${t8("whitewine")} 18cl`, text: "18 cl", image: wine5 },
    { title: `Villa Doluca ${t8("whitewine")} 37.5cl`, text: "37.5 cl", image: wine5 },

    { title: `Villa Doluca ${t8("whitewine")}`, text: "75 cl", image: wine5 },
    { title: `Selection ${t8("whitewine")} 50cl`, text: "50 cl", image: wine6 },
    { title: `Selection ${t8("whitewine")}`, text: "75 cl", image: wine6 },

    { title: `Villa Doluca ${t8("redwine")}`, text: "37.5 cl", image: wine7 },
    { title: `Selection ${t8("redwine")} 50cl`, text: "50 cl", image: wine8 },
    { title: `Selection ${t8("redwine")}`, text: "75 cl", image: wine8 },

    { title: `İdol ${t8("redwine")}`, text: "75 cl", image: wine9 },
    { title: `Diren Collection ${t8("redwine")}`, text: "35 cl", image: wine9 },
    { title: `Diren Collection ${t8("whitewine")}`, text: "35 cl", image: wine9 },

    { title: `Diren Collection ${t8("blush")}`, text: "25 cl", image: wine9 },
  ];

  const champagneMenu = [
    { title: "Prosecco", text: "75 cl", image: champagne },
    { title: "Bella La Mousse", text: "75 cl", image: champagne },
  ];

  const rakiMenu = [
    { title: "Tekirdağ", text: "50 cl", image: raki1 },
    { title: "Efe Gold", text: "50 cl", image: raki2 },
    { title: "Yeni Rakı", text: "50 cl", image: raki2 },
  ];

  const liqueurMenu = [
    { title: "Jägermeister", text: "", image: liqueur1 },
    { title: "Captain Morgan White Rum", text: "70 cl", image: liqueur2 },
    { title: "Archers Schnapps", text: "70 cl", image: liqueur3 },
    { title: "Cardinal Melon", text: "70 cl", image: liqueur4 },
    { title: "Baileys", text: "70 cl", image: liqueur5 },
    { title: "Martini Bianco", text: "75 cl", image: liqueur6 },
    { title: "Hurricane Cocorum", text: "100 cl", image: liqueur7 },
  ];

  const cocktailMenu = [
    {
      title: t8("title1"),
      text: t8("text1"),
      image: cocktail1,
    },
    {
      title: t8("title2"),
      text: t8("text2"),
      image: cocktail2,
    },
    {
      title: t8("title3"),
      text: t8("text3"),
      image: cocktail3,
    },
    {
      title: t8("title4"),
      text: t8("text4"),
      image: cocktail4,
    },
    {
      title: t8("title5"),
      text: t8("text5"),
      image: cocktail5,
    },
    {
      title: t8("title6"),
      text: t8("text6"),
      image: cocktail6,
    },
    {
      title: t8("title7"),
      text: t8("text7"),
      image: cocktail7,
    },
    {
      title: t8("title8"),
      text: t8("text8"),
      image: cocktail8,
    },

    {
      title: t8("title9"),
      text: t8("text9"),
      image: cocktail9,
    },
    {
      title: t8("title10"),
      text: t8("text10"),
      image: cocktail10,
    },
  ];

  const icedCoffees = [
    { title: t9("title1"), text: "", image: icedcoffee1 },
    { title: t9("title2"), text: "", image: icedcoffee2 },
    { title: t9("title3"), text: "", image: icedcoffee3 },
    { title:t9("title4"), text: "", image: icedcoffee4 },
    { title: t9("title5"), text: "", image: icedcoffee5 },
  ];

  const frozenMenu = [
    { title: t10("title1"), text: "", image: frozen1 },
    { title: t10("title2"), text: "", image: frozen2 },
  ];

  const softIcecekMenu = [
    { title: t11("title1"), text: "", image: soft1 },
    { title:  t11("title2"), text: "", image: soft2 },
    { title:  t11("title3"), text: "", image: soft3 },
    { title: t11("title4"), text: "", image: soft4 },
    { title:  t11("title5"), text: "", image: soft5 },
    { title:  t11("title6"), text: "", image: soft6 },
    { title:  t11("title7"), text: "", image: soft7 },
    { title:  t11("title8"), text: "", image: soft8 },
    { title:  t11("title9"), text: "", image: soft9 },
    { title:  t11("title10"), text: "", image: soft10 },
    { title:  t11("title11"), text: "", image: soft11 },
    { title:  t11("title12"), text: "", image: soft12 },
  ];

  const menuData = {
    kahvalti: kahvaltiMenu,
    "gunun-menu": gununMenu,
    "ana-yemek": anaYemekMenu,
    pizzas:pizzas,
    hamburger:hamburger,
    pastas:pastas,
    vegetarian:vegetarian,
    atistirmalik: atistirmalikMenu,
    salatalar: salatalarMenu,
    // "alkollu-icecek": beerMenu,
    beers: beerMenu,
    whiskys: whiskys,
    vodkas: vodkas,
    tequilas: tequilaMenu,
    gins: ginMenu,
    wines: wineMenu,
    champagnes: champagneMenu,
    rakis: rakiMenu,
    liqueurs: liqueurMenu,
    cocktails: cocktailMenu,
    "kahve-cay": kahveCayMenu,
    "iced-coffee": icedCoffees,
    frozen: frozenMenu,
    "soft-icecek": softIcecekMenu,
  };

  return (
    <main className="scroll-smooth">
      {/* HEADER */}
      <section className="relative h-[400px] lg:h-[500px] overflow-hidden">
        <Image
          src={banner}
          alt="Food & Beverage"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 mt-8 lg:mt-16">
          <h2 className="text-[36px] md:text-5xl font-['Cormorant_Garamond'] font-bold text-white">
            {t("header")}
          </h2>
          <p className="mt-2 text-sm md:text-[15px] text-white">{t("span")}</p>
          <p className="mt-4 max-w-2xl text-xs md:text-sm text-white">
            {t("text1")}
          </p>
          <p className="hidden md:flex mt-2 max-w-2xl text-xs md:text-sm text-white">
            {t("text2")}
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <div className="container mx-auto px-4 lg:px-6 py-16 grid grid-cols-1 lg:grid-cols-4 gap-12">
        <nav className="hidden lg:block sticky top-32 space-y-4">
          {sections.map((sec) => (
            <Link
              key={sec.id}
              href={`#${sec.id}`}
              className="block px-4 py-2 text-gray-700 hover:text-black text-[14px] lg:text-[18px] font-jost font-semibold golge "
            >
              {sec.label}
            </Link>
          ))}
        </nav>
        {/* <div className="absolute left-[30%] w-[1px] h-[600px] bg-gray-300"></div> */}
        <div className="lg:col-span-3 space-y-24">
          {sections.map((sec) => {
            const items = menuData[sec.id] || [];
            return (
              <section key={sec.id} id={sec.id} className="scroll-mt-24">
                <h2 className="text-[20px] lg:text-2xl font-jost font-bold mb-6">
                  {sec.label}
                </h2>
                {items.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.map((item) => (
                      <div
                        key={item.title}
                        className="flex items-start space-x-4 transform transition-transform duration-200 hover:scale-105 hover:shadow-lg p-2 rounded-lg"
                      >
                        {/* 1. 80×80 konteyner */}
                        <div className="relative w-[80px] h-[80px] flex-shrink-0 rounded-full overflow-hidden">
                          {/* 2. fill + object-cover */}
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover"
                          />
                        </div>

                        <div className="flex flex-col">
                          <h3 className="text-[14px] lg:text-[16px] font-medium">{item.title}</h3>
                          <p className="text-[12px] lg:text-[14px] text-gray-600">{item.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </section>
            );
          })}
        </div>
      </div>
    </main>
  );
}
