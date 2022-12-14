package jUnitTest;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

class calcultorTest {

	@Test
	public void calTest() {
		assertEquals(30, calculator.add(10, 20));
	}

	@Test
	public void calTestSub() {
		assertEquals(30, calculator.sub(50, 20));
	}

	@Test
	public void calcTestMul() {
		assertEquals(30, calculator.mul(6, 5));
	}

	@Test
	public void calcTestDiv() {
		assertEquals(6, calculator.div(30, 5));
	}

}
