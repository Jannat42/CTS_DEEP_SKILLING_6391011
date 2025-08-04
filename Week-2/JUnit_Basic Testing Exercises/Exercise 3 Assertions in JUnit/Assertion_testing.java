import org.junit.*;

public class Assertion_testing{
    @Test
    public void testing(){
        Assert.assertEquals(50,23+27);
        Assert.assertTrue(57>52);
        Assert.assertFalse(50<27);
        Assert.assertNull(null);
        Assert.assertNotNull(new Object());
    }
}