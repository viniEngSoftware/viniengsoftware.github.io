object FormCadastro: TFormCadastro
  Left = 0
  Top = 0
  Caption = 'Cadastro'
  ClientHeight = 716
  ClientWidth = 1046
  Color = clBtnFace
  Font.Charset = DEFAULT_CHARSET
  Font.Color = clWindowText
  Font.Height = -12
  Font.Name = 'Segoe UI'
  Font.Style = []
  TextHeight = 15
  object PageControl: TPageControl
    Left = 0
    Top = 8
    Width = 1057
    Height = 721
    ActivePage = Acesso
    TabOrder = 0
    object Acesso: TTabSheet
      Caption = 'Acesso'
      object Painel1: TPanel
        Left = -70
        Top = -40
        Width = 1125
        Height = 401
        TabOrder = 0
        object LbNomeA: TLabel
          Left = 87
          Top = 123
          Width = 33
          Height = 15
          Caption = 'Nome'
        end
        object LbCpfA: TLabel
          Left = 87
          Top = 173
          Width = 21
          Height = 15
          Caption = 'CPF'
        end
        object LbTelefoneA: TLabel
          Left = 87
          Top = 237
          Width = 45
          Height = 15
          Caption = 'Telefone'
        end
        object LbEmailA: TLabel
          Left = 87
          Top = 293
          Width = 29
          Height = 15
          Caption = 'Email'
        end
        object BtConsultar: TButton
          Left = 872
          Top = 300
          Width = 161
          Height = 51
          Caption = 'Consultar'
          TabOrder = 0
        end
        object EdNomeA: TEdit
          Left = 87
          Top = 144
          Width = 489
          Height = 23
          TabOrder = 1
        end
        object EdCpfA: TEdit
          Left = 87
          Top = 194
          Width = 225
          Height = 23
          TabOrder = 2
        end
        object EdTelefoneA: TEdit
          Left = 87
          Top = 258
          Width = 225
          Height = 23
          TabOrder = 3
        end
        object EdEmailA: TEdit
          Left = 87
          Top = 314
          Width = 489
          Height = 23
          TabOrder = 4
        end
      end
      object DBGridConsulta: TDBGrid
        Left = 0
        Top = 359
        Width = 1050
        Height = 329
        DataSource = DataModule1.DataSourceCadastro
        TabOrder = 1
        TitleFont.Charset = DEFAULT_CHARSET
        TitleFont.Color = clWindowText
        TitleFont.Height = -12
        TitleFont.Name = 'Segoe UI'
        TitleFont.Style = []
      end
    end
    object Manutencao: TTabSheet
      Caption = 'Manutencao'
      ImageIndex = 1
      object Painel: TPanel
        Left = 0
        Top = 0
        Width = 1055
        Height = 697
        TabOrder = 0
        object LbCPF: TLabel
          Left = 16
          Top = 131
          Width = 21
          Height = 15
          Caption = 'CPF'
        end
        object LbTelefone: TLabel
          Left = 16
          Top = 195
          Width = 45
          Height = 15
          Caption = 'Telefone'
        end
        object LbEmail: TLabel
          Left = 16
          Top = 251
          Width = 29
          Height = 15
          Caption = 'Email'
        end
        object LbNome: TLabel
          Left = 16
          Top = 81
          Width = 33
          Height = 15
          Caption = 'Nome'
        end
        object EdEmail: TEdit
          Left = 25
          Top = 272
          Width = 489
          Height = 23
          TabOrder = 0
        end
        object EdTelefone: TEdit
          Left = 25
          Top = 216
          Width = 225
          Height = 23
          TabOrder = 1
        end
        object EdCpf: TEdit
          Left = 25
          Top = 152
          Width = 225
          Height = 23
          TabOrder = 2
        end
        object EdNome: TEdit
          Left = 25
          Top = 102
          Width = 489
          Height = 23
          TabOrder = 3
        end
        object EdCodigo: TEdit
          Left = 25
          Top = 16
          Width = 105
          Height = 23
          TabOrder = 4
        end
        object BtIncluir: TButton
          Left = 32
          Top = 392
          Width = 105
          Height = 33
          Caption = 'Incluir'
          TabOrder = 5
        end
        object BtAlterar: TButton
          Left = 216
          Top = 392
          Width = 105
          Height = 33
          Caption = 'Alterar'
          TabOrder = 6
        end
        object BtExcluir: TButton
          Left = 400
          Top = 392
          Width = 105
          Height = 33
          Caption = 'Excluir'
          TabOrder = 7
        end
      end
    end
  end
end
