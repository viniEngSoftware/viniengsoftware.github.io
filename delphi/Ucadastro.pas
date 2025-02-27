unit Ucadastro;

interface

uses
  Winapi.Windows, Winapi.Messages, System.SysUtils, System.Variants, System.Classes, Vcl.Graphics,
  Vcl.Controls, Vcl.Forms, Vcl.Dialogs, Vcl.ComCtrls, Data.DB, Vcl.StdCtrls,
  Vcl.Grids, Vcl.DBGrids, Vcl.ExtCtrls, FireDAC.Comp.Client, FireDAC.DApt, UConexao;

type
  TFormCadastro = class(TForm)
    PageControl: TPageControl;
    Acesso: TTabSheet;
    Manutencao: TTabSheet;
    Painel1: TPanel;
    DBGridConsulta: TDBGrid;
    Painel: TPanel;
    EdEmail: TEdit;
    EdTelefone: TEdit;
    EdCpf: TEdit;
    EdNome: TEdit;
    EdCodigo: TEdit;
    BtIncluir: TButton;
    BtAlterar: TButton;
    BtExcluir: TButton;
    BtConsultar: TButton;
    LbCPF: TLabel;
    LbTelefone: TLabel;
    LbEmail: TLabel;
    LbNome: TLabel;
    LbNomeA: TLabel;
    EdNomeA: TEdit;
    LbCpfA: TLabel;
    EdCpfA: TEdit;
    LbTelefoneA: TLabel;
    EdTelefoneA: TEdit;
    LbEmailA: TLabel;
    EdEmailA: TEdit;
    procedure FormCreate(Sender: TObject);
    procedure BtConsultarClick(Sender: TObject);
    procedure BtIncluirClick(Sender: TObject);
    procedure BtAlterarClick(Sender: TObject);
    procedure BtExcluirClick(Sender: TObject);
    procedure DBGridConsultaCellClick(Column: TColumn);
  private
    procedure ConfigurarQuery;
    procedure LimparCampos;
  public
  end;

var
  FormCadastro: TFormCadastro;

implementation

{$R *.dfm}

procedure TFormCadastro.FormCreate(Sender: TObject);
begin

  ConfigurarQuery;
end;

procedure TFormCadastro.ConfigurarQuery;
begin
  UConexao.DataModule1.FDQueryCadastro.Close;
  UConexao.DataModule1.FDQueryCadastro.SQL.Text := 'SELECT id, nome, cpf, telefone, email FROM clientes ORDER BY id';
  UConexao.DataModule1.FDQueryCadastro.Open;

  DBGridConsulta.DataSource := UConexao.DataModule1.DataSourceCadastro;
  UConexao.DataModule1.DataSourceCadastro.DataSet := UConexao.DataModule1.FDQueryCadastro;
end;

procedure TFormCadastro.BtConsultarClick(Sender: TObject);
begin
  UConexao.DataModule1.FDQueryCadastro.Close;
  UConexao.DataModule1.FDQueryCadastro.Open;
end;

procedure TFormCadastro.BtIncluirClick(Sender: TObject);
begin
  if (EdNome.Text = '') or (EdCpf.Text = '') or (EdTelefone.Text = '') or (EdEmail.Text = '') then
  begin
    ShowMessage('Preencha todos os campos!');
    Exit;
  end;

  UConexao.DataModule1.FDQueryCadastro.Close;
  UConexao.DataModule1.FDQueryCadastro.SQL.Text := 'INSERT INTO clientes (nome, cpf, telefone, email) VALUES (:nome, :cpf, :telefone, :email)';
  UConexao.DataModule1.FDQueryCadastro.ParamByName('nome').AsString := EdNome.Text;
  UConexao.DataModule1.FDQueryCadastro.ParamByName('cpf').AsString := EdCpf.Text;
  UConexao.DataModule1.FDQueryCadastro.ParamByName('telefone').AsString := EdTelefone.Text;
  UConexao.DataModule1.FDQueryCadastro.ParamByName('email').AsString := EdEmail.Text;
  UConexao.DataModule1.FDQueryCadastro.ExecSQL;

  ShowMessage('Cliente incluído com sucesso!');
  LimparCampos;
  BtConsultarClick(Sender);
end;

procedure TFormCadastro.BtAlterarClick(Sender: TObject);
var
  Codigo: Integer;
begin
  if not TryStrToInt(EdCodigo.Text, Codigo) then
  begin
    ShowMessage('Selecione um cliente para alterar.');
    Exit;
  end;

  UConexao.DataModule1.FDQueryCadastro.Close;
  UConexao.DataModule1.FDQueryCadastro.SQL.Text := 'UPDATE clientes SET nome = :nome, cpf = :cpf, telefone = :telefone, email = :email WHERE id = :id';
  UConexao.DataModule1.FDQueryCadastro.ParamByName('id').AsInteger := Codigo;
  UConexao.DataModule1.FDQueryCadastro.ParamByName('nome').AsString := EdNomeA.Text;
  UConexao.DataModule1.FDQueryCadastro.ParamByName('cpf').AsString := EdCpfA.Text;
  UConexao.DataModule1.FDQueryCadastro.ParamByName('telefone').AsString := EdTelefoneA.Text;
  UConexao.DataModule1.FDQueryCadastro.ParamByName('email').AsString := EdEmailA.Text;
  UConexao.DataModule1.FDQueryCadastro.ExecSQL;

  ShowMessage('Cliente alterado com sucesso!');
  LimparCampos;
  BtConsultarClick(Sender);
end;

procedure TFormCadastro.BtExcluirClick(Sender: TObject);
var
  Codigo: Integer;
begin
  if not TryStrToInt(EdCodigo.Text, Codigo) then
  begin
    ShowMessage('Selecione um cliente para excluir.');
    Exit;
  end;

  if MessageDlg('Tem certeza que deseja excluir este cliente?', mtConfirmation, [mbYes, mbNo], 0) = mrNo then
    Exit;

  UConexao.DataModule1.FDQueryCadastro.Close;
  UConexao.DataModule1.FDQueryCadastro.SQL.Text := 'DELETE FROM clientes WHERE id = :id';
  UConexao.DataModule1.FDQueryCadastro.ParamByName('id').AsInteger := Codigo;
  UConexao.DataModule1.FDQueryCadastro.ExecSQL;

  ShowMessage('Cliente excluído com sucesso!');
  LimparCampos;
  BtConsultarClick(Sender);
end;

procedure TFormCadastro.DBGridConsultaCellClick(Column: TColumn);
begin
  if UConexao.DataModule1.FDQueryCadastro.IsEmpty then
  begin
    ShowMessage('Nenhum cliente selecionado.');
    Exit;
  end;

  EdCodigo.Text := UConexao.DataModule1.FDQueryCadastro.FieldByName('id').AsString;
  EdNomeA.Text := UConexao.DataModule1.FDQueryCadastro.FieldByName('nome').AsString;
  EdCpfA.Text := UConexao.DataModule1.FDQueryCadastro.FieldByName('cpf').AsString;
  EdTelefoneA.Text := UConexao.DataModule1.FDQueryCadastro.FieldByName('telefone').AsString;
  EdEmailA.Text := UConexao.DataModule1.FDQueryCadastro.FieldByName('email').AsString;
end;

procedure TFormCadastro.LimparCampos;
begin
  EdCodigo.Clear;
  EdNome.Clear;
  EdCpf.Clear;
  EdTelefone.Clear;
  EdEmail.Clear;
  EdNomeA.Clear;
  EdCpfA.Clear;
  EdTelefoneA.Clear;
  EdEmailA.Clear;
end;

end.

