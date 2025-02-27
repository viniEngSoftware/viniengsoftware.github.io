unit UCadastro;

interface

uses
  Winapi.Windows, Winapi.Messages, System.SysUtils, System.Variants, System.Classes, Vcl.Graphics,
  Vcl.Controls, Vcl.Forms, Vcl.Dialogs, Vcl.ComCtrls, Data.DB, Vcl.Grids,
  Vcl.DBGrids, Vcl.ExtCtrls, Vcl.StdCtrls, UDadosConexao;

type
  TFormCadatro = class(TForm)
    PageControl1: TPageControl;
    Acesso: TTabSheet;
    Cadastro: TTabSheet;
    PanelAcesso: TPanel;
    DBGridAcesso: TDBGrid;
    EdNomeAcesso: TEdit;
    EdCPFAcesso: TEdit;
    EdTelefoneAcesso: TEdit;
    EdEmailAcesso: TEdit;
    LbCPFAcesso: TLabel;
    LbEMAILAcesso: TLabel;
    LbTelefoneAcesso: TLabel;
    LbNomeAcesso: TLabel;
    BtConsultar: TButton;
    PainelCadastro: TPanel;
    EdNome: TEdit;
    EdCPF: TEdit;
    EdTelefone: TEdit;
    EdEmail: TEdit;
    LbCPF: TLabel;
    LbEMAIL: TLabel;
    LbTelefone: TLabel;
    LNome: TLabel;
    BtIncluir: TButton;
    BtAlterar: TButton;
    BtExcluir: TButton;
    EdCodigo: TEdit;
    BtConfirmar: TButton;
    BtDesistir: TButton;
    procedure BtConsultarClick(Sender: TObject);
    procedure BtIncluirClick(Sender: TObject);
    procedure BtConfirmarClick(Sender: TObject);
    procedure BtDesistirClick(Sender: TObject);
    procedure BtAlterarClick(Sender: TObject);
    procedure BtExcluirClick(Sender: TObject);
    procedure FormCreate(Sender: TObject);
  private
    { Private declarations }

  public
    { Public declarations }
    procedure MudaBotao;
    procedure DesabilitaBotao;
  end;

var
  FormCadatro: TFormCadatro;
  FIncluir: Boolean;

implementation

{$R *.dfm}

procedure TFormCadatro.BtAlterarClick(Sender: TObject);
begin
  MudaBotao;
  DesabilitaBotao;
end;

procedure TFormCadatro.BtConfirmarClick(Sender: TObject);
begin

  if not EdNome.Text := ''  then
  begin
  if FIncluir then
    begin
      umDados.FDQueryCadastro.Close;
      umDados.FDQueryCadastro.SQL.Clear;

        umDados.FDQueryCadastro.SQL.Add('INSERT INTO clientes');
        umDados.FDQueryCadastro.SQL.Add('(nome, cpf, telefone, email)');
        umDados.FDQueryCadastro.SQL.Add('VALUES('+QuotedStr(EdNome.Text));
        umDados.FDQueryCadastro.SQL.Add(','+QuotedStr(EdCPF.Text));
        umDados.FDQueryCadastro.SQL.Add(','+QuotedStr(EdTelefone.Text));
        umDados.FDQueryCadastro.SQL.Add(','+QuotedStr(EdEmail.Text)+')');
        umDados.FDQueryCadastro.ExecSQL;



    end;
  end;

  MudaBotao;
  DesabilitaBotao;
end;

procedure TFormCadatro.BtConsultarClick(Sender: TObject);

begin

  umDados.FDQueryCadastro.close;
  umDados.FDQueryCadastro.Open();

end;

procedure TFormCadatro.BtDesistirClick(Sender: TObject);
begin
  MudaBotao;
  DesabilitaBotao;
end;

procedure TFormCadatro.BtExcluirClick(Sender: TObject);
begin
  MudaBotao;
  DesabilitaBotao;
end;

procedure TFormCadatro.BtIncluirClick(Sender: TObject);
begin
  FIncluir := true;
  MudaBotao;

  DesabilitaBotao;
end;

procedure TFormCadatro.DesabilitaBotao;
begin

  if EdCodigo.Enabled then
    EdCodigo.Enabled := false;

  if EdNome.Enabled then
    EdNome.Enabled := false
  else
    EdNome.Enabled := true;

  if EdCPF.Enabled then
    EdCPF.Enabled := false
    else
     EdCPF.Enabled := true;

  if EdTelefone.Enabled then
    EdTelefone.Enabled := false
      else
     EdTelefone.Enabled := true;

  if EdEmail.Enabled then
    EdEmail.Enabled := false
      else
     EdEmail.Enabled := true;

end;

procedure TFormCadatro.FormCreate(Sender: TObject);
begin
  FIncluir := false;

  DesabilitaBotao;
end;

procedure TFormCadatro.MudaBotao;
begin

  if not BtConfirmar.Visible then
  begin
    BtDesistir.Visible := true;
    BtConfirmar.Visible := true;
    BtIncluir.Visible := false;
    BtAlterar.Visible := false;
    BtExcluir.Visible := false;
  end
  else
  begin
    BtDesistir.Visible := false;
    BtConfirmar.Visible := false;
    BtIncluir.Visible := true;
    BtAlterar.Visible := true;
    BtExcluir.Visible := true;
  end;

end;



end.
