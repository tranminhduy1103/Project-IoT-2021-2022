namespace IoT.Api.DataObjects
{
    public class RecordDTO : BaseDTO<int>
    {
        public DateTime DateIssued { get; set; }
        public float SPO2 { get; set; }
        public float HeartRate { get; set; }
        public string? UserId { get; set; } = string.Empty;
    }
}
