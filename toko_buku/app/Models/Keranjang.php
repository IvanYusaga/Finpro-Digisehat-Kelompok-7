namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Keranjang extends Model
{
    use HasFactory;
    protected $fillable = ['nama_barang', 'harga'];

    public function barang()
    {
        return $this->belongsTo(Barang::class);
    }
}