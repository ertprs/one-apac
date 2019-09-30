
exports.up = function(knex) {
  return knex.schema.alterTable('views', (table) => {
    table.dropUnique('description');
    table.alter('event_id').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.alterTable('views', (table) => {
    table.alter('description').unique();
    table.alter('event_id').nullable();
  });
};
