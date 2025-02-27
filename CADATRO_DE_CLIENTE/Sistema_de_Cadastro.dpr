program Sistema_de_Cadastro;

uses
  Vcl.Forms,
  UCadastro in 'UCadastro.pas' {FormCadatro},
  UDadosConexao in 'UDadosConexao.pas' {umDados: TDataModule};

{$R *.res}

begin
  Application.Initialize;
  Application.MainFormOnTaskbar := True;
  Application.CreateForm(TFormCadatro, FormCadatro);
  Application.CreateForm(TumDados, umDados);
  Application.Run;
end.
