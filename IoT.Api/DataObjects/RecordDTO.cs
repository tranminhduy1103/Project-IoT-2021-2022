namespace IoT.Api.DataObjects
{
    public class RecordDTO : BaseDTO<int>
    {
        public DateTime DateIssued { get; set; }
        public float Temperature { get; set; }
        public float Humidity { get; set; }
        public string? UserId { get; set; } = string.Empty;
    }
}
