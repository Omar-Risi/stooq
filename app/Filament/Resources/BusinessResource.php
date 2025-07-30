<?php

namespace App\Filament\Resources;

use App\Filament\Resources\BusinessResource\Pages;
use App\Filament\Resources\BusinessResource\RelationManagers;
use App\Models\Business;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class BusinessResource extends Resource
{

    protected static ?string $model = Business::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function canCreate():bool {return false;}

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Fieldset::make('Business Information')->schema([
                    Forms\Components\TextInput::make('name')->label('Business name'),
                    Forms\Components\TextInput::make('age')->label('Business Age'),
                    Forms\Components\TextInput::make('cr')->label('Commercial Regsteration Number'),
                    Forms\Components\TextInput::make('instagram_handle')->label('Instagram Account'),
                    Forms\Components\Textarea::make('description')->label('About business')->columnSpanFull(),
                    Forms\Components\FileUpload::make('profile_img')->label('Profile image'),
                    Forms\Components\FileUpload::make('banner')->label('Business banner'),
                ]),

                Forms\Components\Fieldset::make('Owner information')->schema([
                    Forms\Components\TextInput::make('owner_name')->label('Name'),
                    Forms\Components\TextInput::make('owner_age')->label('Age'),
                    Forms\Components\TextInput::make('owner_gender')->label('Gender'),
                    Forms\Components\Select::make('educational_institution')->label('Educational Status')->options([
                        "School",
                        "University"
                    ]),
                    Forms\Components\TextInput::make('owner_id')->label('ID number'),
                ]),

                Forms\Components\Repeater::make('products')
                ->relationship('products')
                ->schema([
                    Forms\Components\TextInput::make('name')->label('Product Name')->required(),
                    Forms\Components\TextInput::make('price')->numeric()->prefix('OMR'),
                ])
                ->columns(2)
                ->minItems(0)
                ->maxItems(10)
                ->label('Products')
                ->collapsible()
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('name')->searchable(),
                Tables\Columns\TextColumn::make('instagram_handle')->searchable(),
                // TODO: add products count
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListBusinesses::route('/'),
            'create' => Pages\CreateBusiness::route('/create'),
            'edit' => Pages\EditBusiness::route('/{record}/edit'),
        ];
    }
}
