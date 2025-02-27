unit UConexao;

interface

uses
  System.SysUtils, System.Classes, FireDAC.Stan.Intf, FireDAC.Stan.Option,
  FireDAC.Stan.Error, FireDAC.UI.Intf, FireDAC.Phys.Intf, FireDAC.Stan.Def,
  FireDAC.Stan.Pool, FireDAC.Stan.Async, FireDAC.Phys, FireDAC.VCLUI.Wait,
  Data.DB, FireDAC.Comp.Client, FireDAC.Phys.PG, FireDAC.Phys.PGDef, System.IniFiles,
  FireDAC.Stan.Param, FireDAC.DatS, FireDAC.DApt.Intf, FireDAC.DApt,
  FireDAC.Comp.DataSet;

type
  TDataModule1 = class(TDataModule)
    Conexao: TFDConnection;
    FDPhysPgDriverLink1: TFDPhysPgDriverLink;
    FDQueryCadastro: TFDQuery;
    DataSourceCadastro: TDataSource;
  private

  public
    procedure Conectar;
    function TestarConexao: Boolean;
  end;

var
  DataModule1: TDataModule1;

implementation

{%CLASSGROUP 'Vcl.Controls.TControl'}

{$R *.dfm}

{ TDataModule1 }


procedure TDataModule1.Conectar;
begin


  try
    // Garante que a conexão seja resetada antes de tentar conectar
    Conexao.Connected := False;
    Conexao.Connected := True;
  except
    on E: Exception do
      raise Exception.Create('Erro ao conectar no banco: ' + E.Message);
  end;
end;

function TDataModule1.TestarConexao: Boolean;
begin
  try
    Conectar;
    Result := Conexao.Connected;
  except
    Result := False;
  end;
end;

end.

