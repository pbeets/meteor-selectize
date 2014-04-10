Package.describe({
  summary: "Selectize is the hybrid of a textbox and <select> box. It's jQuery based and it has autocomplete and native-feeling keyboard navigation; useful for tagging, contact lists, etc."
});

Package.on_use(function (api, where) {
  api.add_files(['selectize.js/dist/js/standalone/selectize.js'], 'client');
});