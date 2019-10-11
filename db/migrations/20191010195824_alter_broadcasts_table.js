
exports.up = function(knex) {
  return knex.schema.alterTable('broadcasts', (table) => {
    table.dropUnique('description');
  });
};

exports.down = function(knex) {
  return knex.schema.alterTable('broadcasts', (table) => {
    table.string('description').unique().alter();
  });
};
