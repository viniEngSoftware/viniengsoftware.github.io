program Cadastro;

uses
  Vcl.Forms,
  Ucadastro in 'Ucadastro.pas' {FormCadastro},
  UConexao in 'UConexao.pas' {DataModule1: TDataModule};

{$R *.res}

begin
  Application.Initialize;
  Application.MainFormOnTaskbar := True;
  Application.CreateForm(TFormCadastro, FormCadastro);
  Application.CreateForm(TDataModule1, DataModule1);
  Application.Run;
end.
