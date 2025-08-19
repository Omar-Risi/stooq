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
                    Forms\Components\TextInput::make('name')
                        ->label('Business name'),
                    Forms\Components\TextInput::make('instagram_handle')
                        ->prefix('@')
                        ->label('Instagram Account'),
                    Forms\Components\Textarea::make('description')
                        ->label('business description')
                        ->columnSpanFull(),
                    Forms\Components\TextInput::make('age')
                        ->label('Business Age')
                        ->suffix('years'),
                    Forms\Components\TextInput::make('cr')
                        ->label('Commercial Regsteration Number'),
                    Forms\Components\Textarea::make('description')
                        ->label('About business')
                        ->columnSpanFull(),
                    Forms\Components\FileUpload::make('logo')
                        ->label('Business logo'),
                    Forms\Components\FileUpload::make('banner')
                        ->label('Business banner'),
                ]),

            Forms\Components\Fieldset::make('Owner')
                ->relationship('owner') // bind this group to the owner relation
                ->schema([
                    Forms\Components\TextInput::make('name')
                        ->label('Owner Name'),

                    Forms\Components\Select::make('gender')
                        ->options([
                            'Male' => 'male',
                            'Female' => 'female'
                        ]),

                    Forms\Components\TextInput::make('age')
                        ->label('Owner age')
                        ->suffix('years'),

                    Forms\Components\TextInput::make('resident_id')
                        ->label('ID number'),

                    Forms\Components\TextInput::make('nationality')
                        ->label('Owner nationality'),

                    Forms\Components\Select::make('governorate')
                        ->options([
                            'muscat' => 'Muscat',
                            'dhofat' => 'Dhofar',
                            'musandam' => 'Musandam',
                            'al_batinah_north' => 'Al Batinah North',
                            'al_batinah_south' => 'Al Batinah South',
                            'al_dakhiliyah' => 'Al Dakhiliyah',
                            'al_sharqiyah_north' => 'Al Sharqiyah North',
                            'al_sharqiyah_south' => 'Al Sharqiyah South',
                            'al_dahirah' => 'Al Dahirah',
                            'al_wusta' => 'Al Wusta',
                            'al_buraimi' => 'Al Buraimi'
                        ])
                        ->columnSpanFull(),
                    Forms\Components\Select::make('education_level')
                        ->options([
                            'school' => 'School',
                            'higher_education' => 'Higher Education',
                        ]),
                    Forms\Components\TextInput::make('institute_name')
                        ->label('Educational institute name'),

                    Forms\Components\TextInput::make('email')
                        ->email(),

                    Forms\Components\TextInput::make('phone_number')
                        ->prefix('+968'),

                ]),

                Forms\Components\Repeater::make('products')
                ->relationship('products')
                ->schema([
                    Forms\Components\TextInput::make('name')
                        ->label('Product Name')
                        ->required(),
                    Forms\Components\TextInput::make('price')
                        ->numeric()
                        ->prefix('OMR'),
                    Forms\Components\TextInput::make('quantity')
                    ->numeric()
                    ->suffix('pcs'),
                    Forms\Components\Textarea::make('description')
                        ->label('Product description')
                        ->columnSpanFull(),
                    Forms\Components\FileUpload::make('image')
                        ->label('Product image'),
                ])
                ->columns(2)
                ->minItems(0)
                ->maxItems(10)
                ->columnSpanFull()
                ->label('Products')
                ->collapsible()
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('name')->searchable(),
                Tables\Columns\TextColumn::make('instagram_handle')->prefix('@')->searchable(),
                Tables\Columns\TextColumn::make('products_count')->counts('products'),
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
