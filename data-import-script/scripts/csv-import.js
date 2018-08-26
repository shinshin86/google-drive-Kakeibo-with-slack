'use strict';
const { Payment } = require('../models');
const csvFilePath = './csvdata/export.csv'
const csv = require('csvtojson')
const bulkImport = () => {
  console.log('==================> bulk import');
  try {
    csv()
      .fromFile(csvFilePath)
      .then((jsonObj)=>{
        console.log(jsonObj);
        Payment.bulkCreate(jsonObj)
      })
      .catch(err => {
        throw err
      })
  } catch(error) {
    console.log(error);
  }
}

// README: このプログラムは"scripts"配下で起動させてください
// 注意：csv のheader名を英語に変換する必要あり
bulkImport();
