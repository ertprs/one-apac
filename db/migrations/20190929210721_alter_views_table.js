
exports.up = function(knex) {
  return knex.schema.alterTable('views', (table) => {
    table.dropUnique('description');
    table.integer('event_id').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.alterTable('views', (table) => {
    table.string('description').unique();
    table.integer('event_id').nullable();
  });
};
