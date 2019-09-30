
exports.up = function(knex) {
  return knex.schema.table('views', (table) => {
    table.integer('event_id');
    table.foreign('event_id').references('id').inTable('events');
  });
};

exports.down = function(knex) {
  return knex.schema.table('views', (table) => {
    table.dropColumn('event_id');
  });
};
