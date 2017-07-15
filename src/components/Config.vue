<template>
  <div class="container-fluid">
    <div class="row prepend-top-default">
      <div class="col-lg-3 profile-settings-sidebar">
        <h4>Sincronização</h4>
        <p>Você pode executar rotinas de sincronização de <code>projetos</code>, <code>boards</code> e <code>labels</code>.</p>
      </div>
      <div class="col-lg-9">
        <label class="label-light">Private Token</label>
        <input type="text" class="form-control" value="RXFCfiVsfgdkh25Zueqc" readonly>
        <p class="help-block">Sua chave privada é usada para acessar a API sem ter que fazer autenticação.</p>
        <br>
        <div class="append-bottom-10">
          <div class="input-group">
            <span class="input-group-btn">
              <button class="btn btn-success">Sincronizar Projetos, Boards e Labels...</button>
            </span>
            <input type="text" class="form-control" value="Última sincronização em 08/07/2017 às 23:55:23." readonly>
          </div>
        </div>
      </div>
    </div>
    <hr>
    <div class="row prepend-top-default">
      <div class="col-lg-3 profile-settings-sidebar">
        <h4>Perfis de Apresentação</h4>
        <p>Aqui você pode configurar perfis de apresentação de dados por grupo ou projeto.</p>
      </div>
      <div class="col-lg-9">
        <!-- noop -->
      </div>
    </div>
  </div>
</template>

<script>
export default {

};
</script>
