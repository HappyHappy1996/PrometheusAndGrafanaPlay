const Prometheus = require('prom-client');

function initPrometheus(app) {
  Prometheus.collectDefaultMetrics();

  app.get('/metrics', (req, res) => {
    res.set('Content-Type', Prometheus.register.contentType);
    res.end(Prometheus.register.metrics());
  });
}

module.exports = {
  initPrometheus,
};
